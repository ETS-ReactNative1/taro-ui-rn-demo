import React from 'react'
import { AtForm, AtSwitch } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  switchValue: boolean
}

export default class Index extends React.Component<{}, IndexState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      switchValue: true
    }
  }

  private handleChange = (value: boolean): void => {
    this.setState({
      switchValue: value
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Switch 开关'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础用法</Text></View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtForm>
                  <AtSwitch
                    title='开启中'
                    checked={this.state.switchValue}
                    onChange={this.handleChange}
                  />
                  <AtSwitch title='已关闭' border={false} />
                </AtForm>
              </View>
            </View>
          </View>

          {/* 禁用状态 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>禁用状态</Text></View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtForm>
                  <AtSwitch title='不可点击' checked disabled />
                  <AtSwitch title='不可点击' border={false} disabled />
                </AtForm>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
