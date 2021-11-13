import React from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class BasicTypo extends React.Component {
  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Typography 字体' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>示例</Text></View>
            <View className='panel__content'>
              <View className='table-typo'>
                <View className='table-typo__head'>
                  <View className='table-typo__head__thead table-typo__head__thead-0'>类型</View>
                  <View className='table-typo__head__thead table-typo__head__thead-1'>行高</View>
                  <View className='table-typo__head__thead table-typo__head__thead-2'>用途</View>
                </View>
                <View className='table-typo__body'>
                  <View className='table-typo__line table-typo__line-0'>
                    <Text className='table-typo__line__col table-typo__line__col-0 table-typo__line__col-h0'>H0，40PX</Text>
                    <Text className='table-typo__line__col table-typo__line__col-1'>60PX</Text>
                    <Text className='table-typo__line__col'>仅用于数字</Text>
                  </View>
                  <View className='table-typo__line table-typo__line-1'>
                    <Text className='table-typo__line__col table-typo__line__col-0 table-typo__line__col-h1'>H1，36PX</Text>
                    <Text className='table-typo__line__col table-typo__line__col-1'>54PX</Text>
                    <Text className='table-typo__line__col'>大模块标题</Text>
                  </View>
                  <View className='table-typo__line table-typo__line-2'>
                    <Text className='table-typo__line__col table-typo__line__col-0 table-typo__line__col-h2'>H2，32PX</Text>
                    <Text className='table-typo__line__col table-typo__line__col-1'>48PX</Text>
                    <Text className='table-typo__line__col'>常规标题</Text>
                  </View>
                  <View className='table-typo__line table-typo__line-3'>
                    <Text className='table-typo__line__col table-typo__line__col-0 table-typo__line__col-h3'>H3，28PX</Text>
                    <Text className='table-typo__line__col table-typo__line__col-1'>42PX</Text>
                    <Text className='table-typo__line__col'>正文</Text>
                  </View>
                  <View className='table-typo__line table-typo__line-4'>
                    <Text className='table-typo__line__col table-typo__line__col-0 table-typo__line__col-h4'>H4，24PX</Text>
                    <Text className='table-typo__line__col table-typo__line__col-1'>36PX</Text>
                    <Text className='table-typo__line__col'>辅助信息、注释</Text>
                  </View>
                  <View className='table-typo__line table-typo__line-5'>
                    <Text className='table-typo__line__col table-typo__line__col-0 table-typo__line__col-h5'>H5，20PX</Text>
                    <Text className='table-typo__line__col table-typo__line__col-1'>30PX</Text>
                    <Text className='table-typo__line__col'>标签</Text>
                  </View>
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
