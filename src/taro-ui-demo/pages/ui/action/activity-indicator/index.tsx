import React from 'react'
import { AtActivityIndicator, AtSwitch } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface ActivityIndicatorPageState {
  isOpened: boolean
}

export default class ActivityIndicatorPage extends React.Component<
  {},
  ActivityIndicatorPageState
> {

  public constructor(props: any) {
    super(props)
    this.state = {
      isOpened: true
    }
  }

  private handleChange(value: boolean): void {
    this.setState({
      isOpened: value
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page activity-indicator-page'>
        {/* S Header */}
        <DocsHeader title='Activity Indicator 活动指示器' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 自定义尺寸 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义尺寸</Text></View>
            <View className='panel__content'>
              <View className='demo-activity-indicator__example-item'>
                <View className='demo-activity-indicator__sub-item'>
                  <AtActivityIndicator size={40} />
                </View>
                <View className='demo-activity-indicator__sub-item'>
                  <AtActivityIndicator size={48} />
                </View>
                <View className='demo-activity-indicator__sub-item'>
                  <AtActivityIndicator size={64} />
                </View>
              </View>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义颜色</Text></View>
            <View className='panel__content'>
              <View className='demo-activity-indicator__example-item'>
                <View className='demo-activity-indicator__sub-item'>
                  <AtActivityIndicator color='#13CE66' />
                </View>
                <View className='demo-activity-indicator__sub-item'>
                  <AtActivityIndicator color='#FF4949' />
                </View>
                <View className='demo-activity-indicator__sub-item'>
                  <AtActivityIndicator color='#C9C9C9' />
                </View>
              </View>
            </View>
          </View>

          {/* 自定义文字 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义文字</Text></View>
            <View className='panel__content'>
              <View className='demo-activity-indicator__example-item'>
                <AtActivityIndicator content='加载中...' />
              </View>
            </View>
          </View>

          {/* 状态切换 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>状态切换</Text></View>
            <View className='panel__content '>
              <AtSwitch
                border={false}
                title={this.state.isOpened ? '开启中' : '关闭中'}
                checked={this.state.isOpened}
                onChange={this.handleChange.bind(this)}
              />
              <View className='demo-activity-indicator__example-item'>
                <AtActivityIndicator
                  content='加载中...'
                  isOpened={this.state.isOpened}
                />
              </View>
            </View>
          </View>

          {/* 垂直水平居中 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>垂直水平居中</Text></View>
            <View className='panel__content'>
              <View className='demo-activity-indicator__example-item demo-activity-indicator__example-item--center'>
                <AtActivityIndicator mode='center' />
              </View>
              <View className='demo-activity-indicator__example-item demo-activity-indicator__example-item--center'>
                <AtActivityIndicator mode='center' content='Loading...' />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
