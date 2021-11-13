import React from 'react'
import { AtDivider, AtIcon } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class LoadMorePage extends React.Component {
  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Divider 分隔线' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 文字 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>一般用法</Text></View>
            <View className='panel__content no-padding'>
              <AtDivider content='分割线' />
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义颜色</Text></View>
            <View className='panel__content no-padding'>
              <AtDivider
                content='没有更多了'
                fontColor='#ed3f14'
                lineColor='#ed3f14'
              />
              <AtDivider
                content='没有更多了'
                fontColor='#ff9900'
                lineColor='#ff9900'
              />
              <AtDivider
                content='没有更多了'
                fontColor='#2d8cf0'
                lineColor='#2d8cf0'
              />
            </View>
          </View>

          {/* 自定义内容 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义内容</Text></View>
            <View className='panel__content no-padding'>
              <AtDivider>
                <AtIcon value='check-circle' />
              </AtDivider>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
