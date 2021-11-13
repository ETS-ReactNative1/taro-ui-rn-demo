import React from 'react'
import { AtBadge, AtButton } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class BadgePage extends React.Component {
  public render(): JSX.Element {
    const dot = '···'

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Badge 徽标' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 数字 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>数字</Text></View>
            <View className='panel__content'>
              <View className='badge-item'>
                <View className='badge-item__sub-item'>
                  <AtBadge value='10' maxValue={99}>
                    <AtButton size='small' circle>
                      按钮
                    </AtButton>
                  </AtBadge>
                </View>
                <View className='badge-item__sub-item'>
                  <AtBadge value='100' maxValue={99}>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* 小红点 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>小红点</Text></View>
            <View className='panel__content'>
              <View className='badge-item'>
                <View className='badge-item__sub-item'>
                  <AtBadge dot>
                    <AtButton size='small' circle>
                      按钮
                    </AtButton>
                  </AtBadge>
                </View>
                <View className='badge-item__sub-item'>
                  <AtBadge dot>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* 文本 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>文本</Text></View>
            <View className='panel__content'>
              <View className='badge-item'>
                <View className='badge-item__sub-item'>
                  <AtBadge value='NEW'>
                    <AtButton size='small' circle>
                      按钮
                    </AtButton>
                  </AtBadge>
                </View>
                <View className='badge-item__sub-item'>
                  <AtBadge value='NEW'>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* 省略号 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>省略号</Text></View>
            <View className='panel__content'>
              <View className='badge-item'>
                <View className='badge-item__sub-item'>
                  <AtBadge value={dot}>
                    <AtButton size='small' circle>
                      按钮
                    </AtButton>
                  </AtBadge>
                </View>
                <View className='badge-item__sub-item'>
                  <AtBadge value={dot}>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
