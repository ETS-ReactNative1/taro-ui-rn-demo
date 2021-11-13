import React from 'react'
import { AtTimeline } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class TimelinePage extends React.Component {
  public render(): JSX.Element {
    return (
      <View className='page'>
        <DocsHeader title='Timeline 时间轴' />

        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础用法</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtTimeline
                items={[
                  { title: '刷牙洗脸' },
                  { title: '吃早餐' },
                  { title: '上班' },
                  { title: '睡觉' }
                ]}
              />
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义颜色</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtTimeline
                items={[
                  { title: '刷牙洗脸' },
                  { title: '吃早餐', color: 'green' },
                  { title: '上班', color: 'red' },
                  { title: '睡觉', color: 'yellow' }
                ]}
              />
            </View>
          </View>

          {/* 自定义图标 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义图标</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtTimeline
                items={[
                  { title: '刷牙洗脸', icon: 'check-circle' },
                  { title: '吃早餐', icon: 'clock' },
                  { title: '上班', icon: 'clock' },
                  { title: '睡觉', icon: 'clock' }
                ]}
              />
            </View>
          </View>

          {/* 幽灵节点 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>幽灵节点</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtTimeline
                pending
                items={[
                  { title: '刷牙洗脸' },
                  { title: '吃早餐' },
                  { title: '上班' },
                  { title: '睡觉' }
                ]}
              />
            </View>
          </View>

          {/* 丰富内容 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>丰富内容</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtTimeline
                pending
                items={[
                  {
                    title: '刷牙洗脸',
                    content: ['大概8:00'],
                    icon: 'check-circle'
                  },
                  {
                    title: '吃早餐',
                    content: ['牛奶+面包', '餐后记得吃药'],
                    icon: 'clock'
                  },
                  {
                    title: '上班',
                    content: ['查看邮件', '写PPT', '发送PPT给领导'],
                    icon: 'clock'
                  },
                  { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
