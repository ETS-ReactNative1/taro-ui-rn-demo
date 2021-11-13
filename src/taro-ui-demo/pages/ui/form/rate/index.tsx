import React from 'react'
import { AtRate } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  [key: string]: number
}

export default class Index extends React.Component<{}, IndexState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      rateValue1: 3,
      rateValue2: 3,
      rateValue3: 3,
      rateValue4: 3
    }
  }

  private handleRateChange(stateName: string, value: number): void {
    this.setState({
      [stateName]: value
    })
  }

  public render(): JSX.Element {
    const { rateValue1, rateValue2, rateValue3, rateValue4 } = this.state
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Rate 评分'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础用法</Text></View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate
                  value={rateValue1}
                  onChange={this.handleRateChange.bind(this, 'rateValue1')}
                />
              </View>
            </View>
          </View>

          {/* 自定义尺寸 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义尺寸</Text></View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate
                  size={16}
                  value={rateValue2}
                  onChange={this.handleRateChange.bind(this, 'rateValue2')}
                />
              </View>
            </View>
          </View>

          {/* 自定义评分数 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义评分数</Text></View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate
                  max={10}
                  value={rateValue3}
                  onChange={this.handleRateChange.bind(this, 'rateValue3')}
                />
              </View>
            </View>
          </View>

          {/* 自定义星星间隔 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义星星间隔</Text></View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate
                  margin={15}
                  value={rateValue4}
                  onChange={this.handleRateChange.bind(this, 'rateValue4')}
                />
              </View>
            </View>
          </View>

          {/* 只读 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>只读</Text></View>
            <View className='panel__content'>
              <View className='example-item'>
                <View>评分: 3.5</View>
                <View>
                  <AtRate value={3.5} />
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
