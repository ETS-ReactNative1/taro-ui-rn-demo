import './button.scss'
import React from 'react'
import { View, Button } from '@tarojs/components'

import Header from '../../../../components/head/head'
import Taro from "@tarojs/taro";

export default class PageButton extends React.Component {
  state = {
    btn: [
      {
        text: '页面主操作 Normal',
        size: 'default',
        type: 'primary'
      },
      {
        text: '页面主操作 Loading',
        size: 'default',
        type: 'primary',
        loading: true
      },
      {
        text: '页面主操作 Disabled',
        size: 'default',
        type: 'primary',
        disabled: true
      },
      {
        text: '页面次要操作 Normal',
        size: 'default',
        type: 'default'
      },
      {
        text: '页面次要操作 Disabled',
        size: 'default',
        type: 'default',
        disabled: true
      },
      {
        text: '警告类操作 Normal',
        size: 'default',
        type: 'warn'
      },
      {
        text: '警告类操作 Disabled',
        size: 'default',
        type: 'warn',
        disabled: true
      }
    ]
  }
  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Button'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-body'>
              {this.state.btn.map(item => {
                return (
                  <Button
                    size={item.size ? item.size : ''}
                    type={item.type ? item.type : ''}
                    loading={item.loading ? item.loading : false}
                    disabled={item.disabled ? item.disabled : false}
                    style={{ marginBottom: Taro.pxTransform(10) }}
                  >
                    {item.text}
                  </Button>
                )
              })}
              <Button plain type='primary' style={{ marginBottom: Taro.pxTransform(10) }}>按钮</Button>
              <Button plain type='primary' disabled style={{ marginBottom: Taro.pxTransform(10) }}>不可点击的按钮</Button>
              <Button plain style={{ marginBottom: Taro.pxTransform(10) }}>镂空按钮</Button>
              <Button plain disabled style={{ marginBottom: Taro.pxTransform(10) }}>镂空按钮 Disabled</Button>
              <View className='btn-center'>
                <Button size='mini' type='primary' style={{ marginBottom: Taro.pxTransform(10) }}>小号按钮</Button>
                <Button size='mini' style={{ marginBottom: Taro.pxTransform(10) }}>小号按钮</Button>
                <Button size='mini' type='warn' style={{ marginBottom: Taro.pxTransform(10) }}>小号按钮</Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
