import Taro from '@tarojs/taro';
import isString from 'lodash/isString';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

const queryString = require('query-string');
const md5 = require('md5');

// 判断当前是否断网了
let isConnected = true;
// 细节参考 https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html
Taro.onNetworkStatusChange && Taro.onNetworkStatusChange((data) => {
  isConnected = data.isConnected;
});

/**
 * 获取更加友好的错误提示
 *
 * @param error
 */
function getFriendlyMessage(error): string {
  if (isString(error)) {
    const map = {
      'Network request failed': '当前您的网络状态不佳，请更换网络重试~',
    };
    if (map[error] !== undefined) {
      return map[error];
    }
  }
  if (!isConnected) {
    return '当前网络不佳，请重试';
  }
  return '服务器开小差啦，请重试';
}

const JsonRpc = {
  getEndpoint: async () => {
    return 'http://127.0.0.1:19800/api/json-rpc?i=1';
  },
  getHeaders: async () => {
    const headers: any = {
      'Content-Type': 'application/json',
    };

    // if (process.env.TARO_ENV === 'rn') {
    //   const {Platform} = require('react-native');
    //
    //   // RN环境可以补充一些参数
    //   const EXPODevice = require('expo-device');
    //   headers['Device-Brand'] = EXPODevice.brand;
    //   headers['Device-Manufacturer'] = EXPODevice.manufacturer;
    //   headers['Device-Model-Name'] = EXPODevice.modelName;
    //   headers['Device-Model-ID'] = EXPODevice.modelId;
    //   headers['Device-Total-Memory'] = EXPODevice.totalMemory;
    //   headers['Device-OS-Name'] = EXPODevice.osName;
    //   headers['Device-OS-Version'] = EXPODevice.osVersion;
    //   headers['Device-OS-Build-ID'] = EXPODevice.osBuildId;
    //   headers['Device-OS-Internal-Build-ID'] = EXPODevice.osInternalBuildId;
    //   headers['Device-Platform-Api-Level'] = EXPODevice.platformApiLevel;
    //   headers['Device-Name'] = EXPODevice.deviceName;
    //   headers['Device-Year'] = EXPODevice.deviceYearClass;
    //   headers['Device-Uptime'] = await EXPODevice.getDeviceTypeAsync();
    //   headers['Device-Is-Rooted'] = await EXPODevice.isRootedExperimentalAsync();
    //
    //   const EXPOApp = require('expo-application');
    //   headers['App-Bundle-ID'] = EXPOApp.applicationId;
    //   headers['App-Version'] = EXPOApp.nativeApplicationVersion;
    //   headers['App-Install-Referrer'] = Platform.OS === 'android' ? await EXPOApp.getInstallReferrerAsync() : '';
    //   headers['App-Install-Time'] = Platform.OS === 'android' ? await EXPOApp.getInstallationTimeAsync() : '';
    //
    //   const EXPOConstants = require('expo-constants').default;
    //   headers['App-SessionId'] = EXPOConstants.sessionId;
    //
    //   const DeviceInfo = require('react-native-device-info').default;
    //   headers['App-Unique-ID'] = DeviceInfo.getUniqueId();
    //   headers['Device-User-Agent'] = await DeviceInfo.getUserAgent();
    // }

    // 当前登录用户的JWT
    try {
      const jwt = await Taro.getStorage({ key: 'KEY_JWT' });
      headers.JWT = jwt.data;
    } catch (e) { }

    // 当前分享用户
    try {
      const mid = await Taro.getStorage({ key: 'KEY_SHARE_MID' });
      headers.mid = mid.data;
    } catch (e) { }

    return headers;
  },
  getRequestUrl: async (method: string) => {
    const urlParams: any = {};
    urlParams.__method = method;

    // if (process.env.TARO_ENV === 'rn') {
    //   const DeviceInfo = require('react-native-device-info').default;
    //   urlParams.__app_unique_id = DeviceInfo.getUniqueId();
    //   urlParams.__app_version = DeviceInfo.getVersion();
    // }

    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      if (typeof __wxConfig === 'object') {
        // develop 工具或者真机开发环境
        // trial 测试环境(体验版)
        // release 正式环境
        // @ts-ignore
        urlParams.__wxapp_env = __wxConfig.envVersion;
      }
    }

    const endpoint = await JsonRpc.getEndpoint();
    const query = queryString.stringify(urlParams);
    return endpoint.indexOf('?') === -1 ? `${endpoint}?${query}` : `${endpoint}&${query}`;
  },
  getSignKey: async () => {
    // if (process.env.TARO_ENV === 'rn') {
    //   const EXPOApp = require('expo-application');
    //   return `${EXPOApp.applicationId}-${EXPOApp.nativeApplicationVersion}`;
    // }
    return '';
  },
  request: async (method: string, params: any = {}) => {
    const url = await JsonRpc.getRequestUrl(method);
    const header = await JsonRpc.getHeaders();
    const requestID = nanoid();
    const data = JSON.stringify({
      jsonrpc: '2.0',
      id: requestID,
      method,
      params,
    });

    // 补充签名部分
    header['Json-RPC-Timestamp'] = dayjs().unix();
    // 签名key+签名字符串+当前时间戳
    header['Json-RPC-Sign'] = `${await JsonRpc.getSignKey()}${data}${header['Json-RPC-Timestamp']}`;
    header['Json-RPC-Sign'] = md5(header['Json-RPC-Sign']);

    Taro.reportAnalytics('JsonRPC准备请求', {
      requestID,
      url,
      method: 'POST',
      data,
      header,
    });

    const timeKey = `${method}-${JSON.stringify(params)}-${requestID}`;
    console.time(timeKey);

    try {
      const result = await Taro.request({
        url,
        method: 'POST',
        data,
        header,
      });

      Taro.reportAnalytics('JsonRPC响应请求', {
        requestID,
        method,
        ...result,
      });

      if (result.statusCode !== 200) {
        throw {
          code: result.statusCode,
          message: getFriendlyMessage(result),
        };
      }

      if (result.data.error !== undefined) {
        throw result.data.error;
      }

      console.timeEnd(timeKey);
      return result.data.result;
    } catch (error) {
      console.timeEnd(timeKey);
      Taro.reportAnalytics(
        'JsonRPC发生报错',
        {
          method,
          error: {
            message: error.message,
            stack: error.stack,
            fileName: error.fileName,
            lineNumber: error.lineNumber,
            columnNumber: error.columnNumber,
          },
          // delta,
        },
      );
    }
  },
};

export default JsonRpc;
