import React from 'react'
import { AtRange } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  [key: string]: [number, number]
}

export default class Index extends React.Component<{}, IndexState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      value1: [50, 60],
      value2: [50, 60]
    }
  }

  private handleChange(stateName: string, value: [number, number]): void {
    this.setState({
      [stateName]: value
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Range 范围选择器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础用法</Text></View>
            <View className='panel__content'>
              <View className='example-item'>
                数值范围：{this.state.value1[0]}~{this.state.value1[1]}
              </View>
              <AtRange
                min={30}
                max={90}
                value={this.state.value1}
                onChange={this.handleChange.bind(this, 'value1')}
              />
            </View>
          </View>
          {/* 自定义样式 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义样式</Text></View>
            <View className='panel__content'>
              <View className='example-item'>
                数值范围：{this.state.value2[0]}~{this.state.value2[1]}
              </View>
              <AtRange
                sliderStyle={{ backgroundColor: '#6190E8' }}
                value={this.state.value2}
                onChange={this.handleChange.bind(this, 'value2')}
              />
            </View>
          </View>
          {/* 禁止状态 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>禁止状态</Text></View>
            <View className='panel__content'>
              <AtRange value={[30, 50]} disabled />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
