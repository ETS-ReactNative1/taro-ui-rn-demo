import {useEffect} from 'react';
import Taro from "@tarojs/taro";
import FlashMessage, { showMessage } from "react-native-flash-message";
import RootSiblings from 'react-native-root-siblings';

let inject = false;

function AtMessage() {
  useEffect(() => {
    if (!inject) {
      inject = new RootSiblings(
        <FlashMessage position='top' />
      );

      Taro.eventCenter.on('atMessage', (options = {}) => {
        const { message, type, duration } = options
        showMessage({
          type,
          message,
          duration,
        });
      })
      // 绑定函数
      Taro.atMessage = Taro.eventCenter.trigger.bind(
        Taro.eventCenter,
        'atMessage'
      );
    }
  }, []);

  return null;
}

export default AtMessage;
