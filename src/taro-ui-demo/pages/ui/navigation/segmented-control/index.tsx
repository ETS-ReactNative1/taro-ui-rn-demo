import React from 'react'
import { AtSegmentedControl } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexPageState {
  [key: string]: number
}

export default class Index extends React.Component<{}, IndexPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      current1: 0,
      current2: 0
    }
  }

  private handleClick(num: number, value: number): void {
    this.setState({
      [`current${num}`]: value
    })
  }

  public render(): JSX.Element {
    const { current1, current2 } = this.state
    const tabList1 = ['标签页1', '标签页2']
    const tabList2 = ['标签页1', '标签页2', '标签页3']

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Segmented Control 分段器' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础用法</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtSegmentedControl
                onClick={this.handleClick.bind(this, 1)}
                current={current1}
                values={tabList2}
              />
              <View className='seg-control-tab-content'>
                <Text>标签 {current1 + 1} 的内容</Text>
              </View>
            </View>
          </View>

          {/* 自定义 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义颜色、字体大小</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtSegmentedControl
                onClick={this.handleClick.bind(this, 2)}
                selectedColor='#FF4949'
                fontSize={30}
                current={current2}
                values={tabList2}
              />
              <View className='seg-control-tab-content'>标签 {current2 + 1} 的内容</View>
            </View>
          </View>

          {/* 禁用 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>禁用</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtSegmentedControl disabled values={tabList1} />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
