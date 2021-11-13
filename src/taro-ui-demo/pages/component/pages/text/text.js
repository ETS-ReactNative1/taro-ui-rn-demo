import './text.scss'
import React from 'react'
import { View, Text } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends React.Component {
  constructor() {
    super(...arguments)

    this.state = {
      contents: []
    }
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Text'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text className='example-header-text'>H5、小程序通用</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__text'>
                <Text selectable>可选择的文字</Text>
              </View>
              <View className='example-body__text'>
                <Text>不可选择的文字</Text>
              </View>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text className='example-header-text'>仅工作在小程序</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__text'>
                <Text className='example-body__text__text'>不支持多          空格文字</Text>
              </View>
              <View className='example-body__text'>
                <Text space='example-body__text__text ensp'>多          空格文字(ensp)</Text>
              </View>
              <View className='example-body__text'>
                <Text space='example-body__text__text nbsp'>多          空格文字(nbsp)</Text>
              </View>
              <View className='example-body__text'>
                <Text className='example-body__text__text'>不解码文字&gt;</Text>
              </View>
              <View className='example-body__text'>
                <Text className='example-body__text__text' decode>解码文字&gt;</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
