import React from 'react'
import { AtTabBar } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
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
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 0
    }
  }

  private handleClick(num: number, value: number): void {
    this.setState({
      [`current${num}`]: value
    })
  }

  public render(): JSX.Element {
    const { current1, current2, current3, current4, current5 } = this.state
    const tabList1 = [
      { title: '待办事项', text: 8 },
      { title: '拍照' },
      { title: '通讯录', dot: true }
    ]
    const tabList2 = [
      { title: '待办事项', iconType: 'bullet-list', text: 'new' },
      { title: '拍照', iconType: 'camera' },
      { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
    ]
    const tabList3 = [
      {
        title: '领取中心',
        image:
          'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        selectedImage:
          'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        text: 'new'
      },
      {
        title: '找折扣',
        image:
          'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'
      },
      {
        title: '领会员',
        image:
          'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        text: '100',
        max: 99
      }
    ]

    return (
      <View className='page'>
        <DocsHeader title='TabBar 标签栏'></DocsHeader>

        <View className='doc-body'>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>文本标签栏</Text></View>
            <View className='panel__content no-padding'>
              <AtTabBar
                tabList={tabList1}
                onClick={this.handleClick.bind(this, 1)}
                current={current1}
              />
            </View>
          </View>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>图标文本标签栏</Text></View>
            <View className='panel__content no-padding'>
              <AtTabBar
                tabList={tabList2}
                onClick={this.handleClick.bind(this, 2)}
                current={current2}
              />
            </View>
          </View>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'>
              <Text className='doc-body__panel__title__text'>自定义图标颜色、字体颜色、背景颜色</Text>
            </View>
            <View className='panel__content no-padding'>
              <AtTabBar
                backgroundColor='#FAFBFC'
                color='#ea6bb8'
                selectedColor='#e64340'
                tabList={tabList2}
                onClick={this.handleClick.bind(this, 3)}
                current={current3}
              />
            </View>
          </View>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>图片icon</Text></View>
            <View
              className='panel__content no-padding'
              style='padding-bottom: 24px;'
            >
              <AtTabBar
                tabList={tabList3}
                onClick={this.handleClick.bind(this, 5)}
                current={current5}
              />
            </View>
          </View>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>固定底部</Text></View>
            <View
              className='panel__content no-padding'
              style='padding-bottom: 24px;'
            >
              <AtTabBar
                fixed
                tabList={tabList2}
                onClick={this.handleClick.bind(this, 4)}
                current={current4}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
