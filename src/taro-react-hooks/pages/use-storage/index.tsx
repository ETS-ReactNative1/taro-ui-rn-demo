import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import {set, refresh} from '../../useStorage'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Comp1 />
        <Comp2 />

        <View
          onClick={() => {
            Taro.setStorage({
              key: 'test_key',
              data: 1,
            });
          }}
        >
          <Text>Global Storage Write</Text>
        </View>

        <View
          onClick={() => {
            set('test_key', 1);
          }}
        >
          <Text>Use Storage Write</Text>
        </View>
        <View
          onClick={() => {
            refresh('test_key');
          }}
        >
          <Text>Use Storage Refresh</Text>
        </View>
      </View>
    )
  }
}
