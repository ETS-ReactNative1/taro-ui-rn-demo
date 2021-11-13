import React from 'react'
import { View, Text, Radio, Label, RadioGroup } from '@tarojs/components';
import classNames from 'classnames';
import './radio.scss'

import Header from '../../../../components/head/head'

export default class PageRadio extends React.Component {
  state = {
    isChecked: false,
    selectValue: '中国',
    list: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ]
  }

  radioChange = e => {
    const list = this.state.list.map(item => {
      item.checked = item.value == e.detail.value
      return item
    })
    this.setState({
      list,
      selectValue: e.detail.value
    })
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Radio'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text className='example-header-text'>默认样式</Text>
            </View>
            <View className='radio-example-body'>
              <Radio value='选中' checked>
                选中
              </Radio>
              <Radio style='margin-left: 30px' value='未选中'>
                未选中
              </Radio>
            </View>
          </View>
          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text className='example-header-text'>推荐展示样式</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__select-box'>
                <Text>选中的值是: {this.state.selectValue}</Text>
              </View>
              <View className='example-body__radios'>
                <RadioGroup onChange={this.radioChange}>
                  {this.state.list.map((item, i) => {
                    return (
                      <Label className={classNames(['example-body__radios-item', `example-body__radios-item-${i}`])} key={i}>
                        <Radio
                          className='example-body__radios-item__radio'
                          name='radio'
                          value={item.value}
                          checked={item.checked}
                        >
                          {item.text}
                        </Radio>
                      </Label>
                    )
                  })}
                </RadioGroup>
              </View>
            </View>
          </View>
        </View>
      </View >
    )
  }
}
