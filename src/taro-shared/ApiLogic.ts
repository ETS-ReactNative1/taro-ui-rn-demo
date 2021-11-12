import Taro from '@tarojs/taro';
import isObject from 'lodash/isObject';
import isBoolean from 'lodash/isBoolean';
import JsonRpc from './JsonRpc';
// 一种简单的，后端控制前端业务逻辑的方法

const promiseMap = {
  //////// 基础
  __getLaunchOptionsSync: async ({ apiName }) => {
    if (apiName) {
      const options = Taro.getLaunchOptionsSync();
      try {
        const res = await JsonRpc.request(apiName, options);
        await ApiLogic.run(res);
      } catch (e) {
        await ApiLogic.run(e);
      }
    }
  },
  __getEnterOptionsSync: async ({ apiName }) => {
    if (process.env.TARO_ENV === 'weapp') {
      if (apiName) {
        // @ts-ignore
        const options = Taro.getEnterOptionsSync();
        try {
          const res = await JsonRpc.request(apiName, options);
          await ApiLogic.run(res);
        } catch (e) {
          await ApiLogic.run(e);
        }
      }
    }
  },
  __setEnableDebug: Taro.setEnableDebug,
  __reportPerformance: async ({ id, value, dimensions }) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.reportPerformance(id, value, dimensions);
    }
  },

  //////// 路由
  __switchTab: Taro.switchTab,
  __reLaunch: Taro.reLaunch,
  __redirectTo: Taro.redirectTo,
  __navigateTo: Taro.navigateTo,
  __navigateBack: Taro.navigateBack,

  //////// 跳转
  __navigateToMiniProgram: Taro.navigateToMiniProgram,
  __navigateBackMiniProgram: Taro.navigateBackMiniProgram,
  // @ts-ignore
  __exitMiniProgram: Taro.exitMiniProgram,

  //////// 转发
  __updateShareMenu: Taro.updateShareMenu,
  __showShareMenu: Taro.showShareMenu,
  __showShareImageMenu: async (obj) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.showShareImageMenu(obj);
    }
  },
  __shareVideoMessage: async (obj) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.shareVideoMessage(obj);
    }
  },
  __shareFileMessage: async (obj) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.shareFileMessage(obj);
    }
  },
  __hideShareMenu: Taro.hideShareMenu,
  __getShareInfo: async ({ apiName, ...obj }) => {
    // @ts-ignore
    const info = await Taro.getShareInfo(obj);
    try {
      const res = await JsonRpc.request(apiName, info);
      await ApiLogic.run(res);
    } catch (e) {
      await ApiLogic.run(e);
    }
  },

  //////// 界面
  __showToast: Taro.showToast,
  __showModal: Taro.showModal,
  __showLoading: Taro.showLoading,
  __showActionSheet: Taro.showActionSheet,
  __hideToast: Taro.hideToast,
  __hideLoading: Taro.hideLoading,
  __enableAlertBeforeUnload: async (options) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.enableAlertBeforeUnload(options);
    }
  },
  __disableAlertBeforeUnload: async (options) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.disableAlertBeforeUnload(options);
    }
  },
  __showNavigationBarLoading: Taro.showNavigationBarLoading,
  __setNavigationBarTitle: Taro.setNavigationBarTitle,
  __setNavigationBarColor: Taro.setNavigationBarColor,
  __hideNavigationBarLoading: Taro.hideNavigationBarLoading,
  __hideHomeButton: Taro.hideHomeButton,

  __setBackgroundTextStyle: Taro.setBackgroundTextStyle,
  __setBackgroundColor: Taro.setBackgroundColor,

  __showTabBarRedDot: Taro.showTabBarRedDot,
  __showTabBar: Taro.showTabBar,
  __setTabBarStyle: Taro.setTabBarStyle,
  __setTabBarItem: Taro.setTabBarItem,
  __setTabBarBadge: Taro.setTabBarBadge,
  __removeTabBarBadge: Taro.removeTabBarBadge,
  __hideTabBarRedDot: Taro.hideTabBarRedDot,
  __hideTabBar: Taro.hideTabBar,

  __loadFontFace: Taro.loadFontFace,

  __stopPullDownRefresh: Taro.stopPullDownRefresh,
  __startPullDownRefresh: Taro.startPullDownRefresh,

  __pageScrollTo: Taro.pageScrollTo,

  __nextTick: async (options) => {
    Taro.nextTick(() => {
      ApiLogic.run(options);
    });
  },

  __setWindowSize: async (options) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.setWindowSize(options);
    }
  },

  //////// 网络
  __downloadFile: Taro.downloadFile,

  //////// 支付
  __requestPayment: Taro.requestPayment,

  //////// 数据缓存
  __setStorage: Taro.setStorage,
  __revokeBufferURL: async ({ url }) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.revokeBufferURL(url);
    }
  },
  __removeStorage: Taro.removeStorage,
  __clearStorage: Taro.clearStorage,

  //////// 数据分析
  __reportMonitor: async ({ name, value }) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.reportMonitor(name, value);
    }
  },
  __reportEvent: async ({ eventId, data }) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.reportEvent(eventId, data);
    }
  },
  __reportAnalytics: async ({ eventName, data }) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.reportAnalytics(eventName, data);
    }
  },

  //////// 位置
  __getLocation: Taro.getLocation,

  //////// 文件
  __openDocument: Taro.openDocument,

  //////// 授权
  __authorize: Taro.authorize,
  __openSetting: Taro.openSetting,
  __chooseAddress: Taro.chooseAddress,
  __openCustomerServiceChat: async (obj) => {
    if (process.env.TARO_ENV === 'weapp') {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      wx.openCustomerServiceChat(obj);
    }
  },
};

const callbackKeys = ['complete', 'success', 'fail'];

export interface ObjectResult {
  [propName: string]: any,
}

const ApiLogic = {
  run: async (result: ObjectResult) => {
    if (!isObject(result)) {
      return;
    }
    // @ts-ignore
    for (let k: string in result) {
      if (promiseMap[k] === undefined) {
        continue;
      }
      const handler = promiseMap[k];
      const params = result[k];
      if (isBoolean(params) && !params) {
        continue;
      }
      callbackKeys.map((callbackKey) => {
        if (params[callbackKey] !== undefined) {
          params[callbackKey] = () => {
            ApiLogic.run(params[callbackKey]);
          };
        }
      });
      await handler(params);
    }
  },
};

export default ApiLogic;
