import React from 'react'
import { View, Text } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

type IconKeys = {
  main: 'main'
  file: 'file'
  text: 'text'
  arrow: 'arrow'
  media: 'media'
  photo: 'photo'
  logo: 'logo'
}

interface IconPageState {
  icons: {
    [k in keyof IconKeys]: string[]
  }
}

export default class IconPage extends React.Component<{}, IconPageState> {
  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='ICON 图标' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 主要 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>改造说明</Text></View>
            <View className='panel__content panel__content__padding'>
              <Text>TODO 原来的icon实在不知道怎么处理，现在拿了Ant Design的官方icon来转换一次使用先。</Text>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
