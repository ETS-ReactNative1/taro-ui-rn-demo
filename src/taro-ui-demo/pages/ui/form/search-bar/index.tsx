import React from 'react'
import { AtSearchBar } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  [key: string]: string
}

export default class Index extends React.Component<{}, IndexState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }

  private onChange(stateName: string, value: string): void {
    this.setState({
      [stateName]: value
    })
  }

  private onActionClick(): void {
    Taro.showToast({
      title: '开始搜索',
      icon: 'success',
      duration: 2000
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='SearchBar 搜索栏' />
        {/* E Header */}
        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础用法</Text></View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtSearchBar
                  value={this.state.value1}
                  onChange={this.onChange.bind(this, 'value1')}
                  onActionClick={this.onActionClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 自定义按钮文字和点击事件 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义按钮文字和点击事件</Text></View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtSearchBar
                  actionName='搜一下'
                  value={this.state.value2}
                  onChange={this.onChange.bind(this, 'value2')}
                  onActionClick={this.onActionClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 始终显示按钮 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>始终显示按钮</Text></View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtSearchBar
                  placeholder='请输入ISBN号'
                  showActionButton
                  value={this.state.value3}
                  onChange={this.onChange.bind(this, 'value3')}
                  onActionClick={this.onActionClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 自定义输入框类型 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义输入框类型</Text></View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtSearchBar
                  placeholder='请输入数字'
                  inputType='number'
                  value={this.state.value4}
                  onChange={this.onChange.bind(this, 'value4')}
                  onActionClick={this.onActionClick.bind(this)}
                />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
