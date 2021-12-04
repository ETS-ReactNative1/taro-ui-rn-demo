import React from 'react'
import { AtNavBar } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends React.Component {
  private handleClick(title: string): void {
    Taro.showToast({
      title,
      duration: 2000,
      icon: 'success'
    })
  }

  private clickReturn(): void {
    Taro.showToast({
      title: '返回',
      duration: 2000,
      icon: 'success'
    })
  }

  private clickMy(): void {
    Taro.showToast({
      title: '我的',
      duration: 2000,
      icon: 'success'
    })
  }

  private clickList(): void {
    Taro.showToast({
      title: '功能列表',
      duration: 2000,
      icon: 'success'
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        <DocsHeader title='NavBar 导航栏' />

        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础用法</Text></View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftIconType='chevron-left'
                />
              </View>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftIconType='chevron-left'
                  rightFirstIconType='bullet-list'
                  rightSecondIconType='user'
                />
              </View>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftIconType='chevron-left'
                  rightFirstIconType='user'
                />
              </View>
            </View>
          </View>

          {/* 自定义左上角文案 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义左上角文案</Text></View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftText='返回'
                  leftIconType='chevron-left'
                  rightFirstIconType='bullet-list'
                  rightSecondIconType='user'
                />
              </View>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftText='返回'
                  rightFirstIconType='bullet-list'
                  rightSecondIconType='user'
                />
              </View>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义颜色</Text></View>
            <View className='panel__content no-padding'>
              <AtNavBar
                onClickRgIconSt={this.clickList.bind(this)}
                onClickRgIconNd={this.clickMy.bind(this)}
                onClickLeftIcon={this.clickReturn.bind(this)}
                color='#333'
                title='NavBar 导航栏示例'
                leftText='返回'
                rightFirstIconType='bullet-list'
                rightSecondIconType='user'
              />
            </View>
          </View>

          {/* 自定义图标样式 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义图标样式</Text></View>
            <View className='panel__content no-padding'>
              <AtNavBar
                onClickRgIconSt={this.clickList.bind(this)}
                onClickRgIconNd={this.clickMy.bind(this)}
                onClickLeftIcon={this.clickReturn.bind(this)}
                color='#333'
                title='NavBar 导航栏示例'
                leftText='返回'
                rightFirstIconType='bullet-list'
                rightSecondIconType={{ value: 'user', size: 48, color: 'red' }}
              />
            </View>
          </View>

          {/* 无下划线 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>无下划线</Text></View>
            <View className='panel__content no-padding'>
              <AtNavBar
                border={false}
                onClickRgIconSt={this.clickList.bind(this)}
                onClickRgIconNd={this.clickMy.bind(this)}
                onClickLeftIcon={this.clickReturn.bind(this)}
                color='#333'
                title='NavBar 导航栏示例'
                leftText='返回'
                rightFirstIconType='bullet-list'
                rightSecondIconType='user'
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
