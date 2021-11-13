import React from 'react'
import Taro from '@tarojs/taro';
import { Image, View } from '@tarojs/components'

export default class Foot extends React.Component {
  render() {
    return (
      <View
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/component/index',
          });
        }}
        className='page-foot'
        hoverClass='none'
      >
        <Image
          className='icon-foot'
          src={require('../../assets/common/icon_foot.png')}
        />
      </View>
    )
  }
}
