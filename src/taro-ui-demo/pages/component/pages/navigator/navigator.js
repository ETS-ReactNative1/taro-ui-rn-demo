import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './navigator.scss'

import Header from '../../../../components/head/head'

export default class PageSwitch extends React.Component {
  state = {}

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Navigator'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-body'>
              <View className='example-body__navigators'>
                <View
                  onClick={() => {
                    Taro.navigateTo({
                      url: '/pages/component/pages/navigatePage/navigatePage',
                    });
                  }}
                  className='example-body__navigators-item'
                >
                  <Text className='example-body__navigator'>跳转到新页面</Text>
                </View>
                <View
                  className='example-body__navigators-item'
                  onClick={() => {
                    Taro.redirectTo({
                      url: '/pages/component/pages/redirectPage/redirectPage',
                    });
                  }}
                >
                  <Text className='example-body__navigator'>在当前页打开</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
