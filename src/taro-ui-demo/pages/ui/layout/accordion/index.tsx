import React from 'react'
import { AtAccordion, AtList, AtListItem } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface CardPageState {
  [key: string]: boolean
}

export default class CardPage extends React.Component<{}, CardPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      value1: false,
      value2: true,
      value3: false,
      value4: false
    }
  }

  private onClick(stateName: string, value: boolean): void {
    this.setState({
      [stateName]: value
    })
  }

  public render(): JSX.Element {
    const { value1, value2, value3, value4 } = this.state

    return (
      <View className='page'>
        <DocsHeader title='Accordion 手风琴' />
        <View className='doc-body'>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础用法</Text></View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtAccordion
                  onClick={this.onClick.bind(this, 'value1')}
                  title='标题一'
                  open={value1}
                >
                  <AtList hasBorder={false}>
                    <AtListItem
                      title='标题文字'
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                    />
                  </AtList>
                </AtAccordion>
                <AtAccordion
                  open={value2}
                  title='默认开启'
                  onClick={this.onClick.bind(this, 'value2')}
                >
                  <AtList hasBorder={false}>
                    <AtListItem
                      title='标题文字'
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                    />
                  </AtList>
                </AtAccordion>
              </View>
            </View>
          </View>

          {/* 配置图标 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>配置图标</Text></View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtAccordion
                  title='标题三'
                  open={value4}
                  icon={{ value: 'tags', color: '#77a1fd' }}
                  onClick={this.onClick.bind(this, 'value3')}
                >
                  <AtList hasBorder={false}>
                    <AtListItem
                      title='标题文字'
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                    />
                  </AtList>
                </AtAccordion>
              </View>
            </View>
          </View>

          {/* 包含描述信息 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>包含描述信息</Text></View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtAccordion
                  title='标题三'
                  note='描述信息'
                  open={value3}
                  icon={{ value: 'tags', color: '#77a1fd' }}
                  onClick={this.onClick.bind(this, 'value3')}
                >
                  <AtList hasBorder={false}>
                    <AtListItem
                      title='标题文字'
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                    />
                  </AtList>
                </AtAccordion>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
