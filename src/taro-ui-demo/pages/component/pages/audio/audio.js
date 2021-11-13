import React from 'react';
import { View, Text } from '@tarojs/components';
import Header from '../../../../components/head/head';
import './audio.scss';

export default class PageView extends React.Component {
  render() {
    return (
      <View className="components-page">
        <View className="components-page__header">
          <Header title="Audio" />
        </View>
        <View className="components-page__body">
          <View className="components-page__body-example example">
            <View className="example-body">
              <Text>TODO 改用API的能力来展示</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
