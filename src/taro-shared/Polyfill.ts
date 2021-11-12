import 'promise-prototype-finally';
// import React from 'react';
import Taro from '@tarojs/taro';
// import noop from 'lodash/noop';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

// 设置默认语言，反正这个lib不是很大
dayjs.locale('zh-cn');

// Taro在视图层，基本能实现多端一致，但是在API层还是很难保持一致的
// 例如一些平台的上报API，Taro就算是想做，也没好办法做咯，所以只能自己做兼容
// 为了减少大家的开发工作，尽可能引入这文件吧

if (process.env.TARO_ENV === 'h5') {
  // H5环境相对复杂很多，才需要做这种fix
  // https://github.com/NervJS/taro/issues/2052
  require('core-js/modules/es.object.values');
  require('core-js/modules/es.object.from-entries');

  // https://segmentfault.com/q/1010000022889718
  // window.addEventListener('unhandledrejection', function(event) {
  //   // the event object has two special properties:
  //   console.log('unhandledrejection', event.promise); // [object Promise] - the promise that generated the error
  //   console.log('unhandledrejection', event.reason); // Error: Whoops! - the unhandled error object
  // });

  // 这个方法在H5中是不可能有替代方法的啦，直接留空即可
  Taro.hideNavigationBarLoading = () => { };

  // H5的日志上报，改为上报到其他系统咯
  // console.info('H5环境，reportAnalytics重新实现');
  // const taroH5 = require('@tarojs/taro-h5');
  // console.log('taroH5', taroH5);
  // taroH5.reportAnalytics = (eventName, data) => {
  //   console.log('reportAnalytics', eventName, data);
  // };

  // 非公众号环境下，获取地理位置的兼容
  if (navigator.userAgent.toLowerCase().indexOf('micromessenger') === -1) {
    Taro.getLocation = () => {
      return new Promise((resolve, reject) => {
        const loadJS = require('load-js/src/load-js');
        loadJS(['https://apis.map.qq.com/tools/geolocation/min?key=LRUBZ-PCP65-D42I3-QSENQ-HGYP7-D6BOL&referer=myapp']).then(() => {
          // @ts-ignore
          const geolocation = new qq.maps.Geolocation('LRUBZ-PCP65-D42I3-QSENQ-HGYP7-D6BOL', 'myapp');
          geolocation.getLocation({
            sucCallback: (position) => {
              Taro.reportAnalytics('腾讯地图成功回调', position);
              resolve(position);
            },
            errCallback: (error) => {
              Taro.reportAnalytics('腾讯地图错误回调', error);
              reject(error);
            },
          });
        }).catch(reject);
      });
    };
  }

  // @ts-ignore
  Taro.hideKeyboard = async () => {
    // 参考 https://blog.csdn.net/jrl12345/article/details/105369392
    // @ts-ignore
    document.activeElement.blur();
    return;
  };
}

if (process.env.TARO_ENV === 'weapp') {
  if (global.fetch === undefined) {
    // 有些类库，是直接使用fetch来发起请求的，但是微信小程序环境是没fetch的，我们做下兼容咯
    // 代码来自 https://github.com/cuijiemmx/taro-fetch/blob/master/src/index.js
    // @ts-ignore
    global.fetch = function (url, { method, body, headers }) {
      return new Promise(resolve => {
        Taro.request({
          url,
          method,
          header: headers,
          data: body,
          dataType: 'text',
          // @ts-ignore
          complete: ({ statusCode, data, errMsg, header }) => {
            resolve({
              ok: statusCode >= 200 && statusCode < 300,
              status: statusCode,
              statusText: errMsg,
              headers: header,
              text: () => Promise.resolve(data),
            });
          },
        });
      });
    };
  }
}

// if (process.env.TARO_ENV === 'rn') {
//   require('react-native-console-time-polyfill');
//
//   const {AppState, Dimensions, Text, TextInput, Platform} = require('react-native');
//   const DeviceInfo = require('react-native-device-info').default;
//
//   ///// 异常捕捉
//   const {setGlobalErrorHandler, setPromiseUnCatchHandler} = require('react-native-error-helper');
//   // 参考
//   // https://peilinghui.github.io/2019/11/05/ReactNative%E9%94%99%E8%AF%AF%E5%BC%82%E5%B8%B8%E6%94%B6%E9%9B%86%E5%92%8C%E5%A4%84%E7%90%86/
//   // https://segmentfault.com/a/1190000039932671
//   // TODO 注意：0.64 版本开始，react-native pollfills 相关（包含 ErrorUtils 实现）已由 react-native/Libraries/polyfills 抽离为 @react-native/polyfills
//   // 使用 https://github.com/iChengbo/react-native-error-helper 封装的实现吧
//   setGlobalErrorHandler((error, isFatal) => {
//     Taro.reportAnalytics('RN捕捉JS异常', {
//       error,
//       isFatal,
//     });
//   }, true);
//   setPromiseUnCatchHandler((id, error) => {
//     Taro.reportAnalytics('RN捕捉未处理的Promise异常', {
//       error,
//       id,
//     });
//   }, true);
//
//   ////// RN本身支持的打印能力跟Web上不太一样
//   // @ts-ignore
//   if (!__DEV__) {
//     // 参考 https://github.com/facebook/react-native/issues/26007
//     // 本来是全部屏蔽了，但是感觉保留一些还是有意义的。
//     global.console.info = noop;
//     global.console.log = noop;
//     global.console.debug = noop;
//   }
//
//   ///// 修复Text字体缩放的问题
//
//   // https://bin.zmide.com/?p=634 修复 MIUI 12 导致 React Native APP 字体样式错位
//   // 解决RN0.58部分安卓手机text显示不全问题 https://segmentfault.com/a/1190000023622085
//   const defaultFontFamily = {
//     ...Platform.select({
//       android: { fontFamily: '' },
//     }),
//   };
//   const TextRender = Text.render;
//   Text.render = function(...args) {
//     const originText = TextRender.call(this, ...args);
//     return React.cloneElement(originText, {
//       style: [defaultFontFamily, originText.props.style],
//       allowFontScaling: false, // 禁止字体缩放，这个可能带来其他问题
//     });
//   };
//
//   // https://juejin.cn/post/6844903685575835662  ReactNative字体大小不随系统字体大小变化而变化
//   TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, {allowFontScaling: false});
//
//   // 在启动APP时，就自动加载icon字体吧，要不可能会导致无法显示
//   // TODO 下面的路径要怎么管理？未想好
//   const { customFonts } = require('./taro-ui/iconfont/index.rn');
//   const { loadAsync } = require('expo-font');
//   loadAsync(customFonts).then(console.log).catch(console.warn);
//
//   ///// 小程序或H5的检测其实都还好，APP上默认的功能真的太少了，只能尽可能补下吧
//
//   // APP前后台切换监控
//   let currentAppState = 'started';
//   function _handleAppStateChange(nextAppState) {
//     Taro.reportAnalytics('APP应用状态切换', {
//       currentAppState,
//       nextAppState,
//     });
//     currentAppState = nextAppState;
//   }
//   AppState.removeEventListener('change', _handleAppStateChange);
//   AppState.addEventListener('change', _handleAppStateChange);
//   _handleAppStateChange('active'); // 第一次打开
//
//   // 监听屏幕变化
//   Dimensions.addEventListener('change', (data) => {
//     Taro.reportAnalytics('APP屏幕变化', {
//       currentAppState,
//       ...data,
//     });
//   });
//
//   // 确保弹出弹窗后，键盘会收起
//   const oldShowModal: Function = Taro.showModal;
//   // @ts-ignore
//   Taro.showModal = async (object: Taro.showModal.Option) => {
//     await Taro.hideKeyboard();
//     return await oldShowModal(object);
//   };
//
//   // getUserAgentSync is not available on iOS since it rely on an completion operation
//   // 为此，我们尽量早在应用启动时就获取咯。。。尽可能补救下
//   // 这里提前执行下，到时候同步方法就能获取得到了
//   DeviceInfo.getUserAgent().then(console.log).catch(console.warn);
//   DeviceInfo.getDeviceName().then(console.log).catch(console.warn);
// }

// 常规的监听
Taro.onNetworkStatusChange && Taro.onNetworkStatusChange((data) => {
  Taro.reportAnalytics('网络发生变化', data);
});
process.env.TARO_ENV !== 'h5' && Taro.onUserCaptureScreen && Taro.onUserCaptureScreen((res) => {
  Taro.reportAnalytics('用户主动截屏', res);
});
process.env.TARO_ENV !== 'h5' && Taro.onMemoryWarning && Taro.onMemoryWarning((res) => {
  Taro.reportAnalytics('内存不足告警', res);
});
