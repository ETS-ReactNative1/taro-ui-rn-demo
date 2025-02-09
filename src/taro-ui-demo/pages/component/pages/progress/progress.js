import React from 'react';
import Taro from '@tarojs/taro';
import { View, Progress, Button } from '@tarojs/components';
import Header from '../../../../components/head/head';
import './progress.scss';

export default class PageView extends React.Component {
  constructor() {
    super(...arguments);
    this._timmer = null;
  }

  state = {
    progress: 0,
  }

  handleStart = () => {
    if (this._timmer || this.state.progress > 100) {return;}
    this._timmer = setInterval(() => {
      const value = this.state.progress + 2;
      if (value > 100) {
        return this.handleStop();
      }
      this.setState({
        progress: value,
      });
    }, 100);
  }

  handleStop = () => {
    if (this._timmer) {
      clearInterval(this._timmer);
      this._timmer = null;
    }
  }

  handleReset = () => {
    this.handleStop();
    this.setState({
      progress: 0,
    });
  }

  render() {
    const { progress } = this.state;
    return (
      <View className="components-page">
        <View className="components-page__header">
          <Header title="Progress" />
        </View>
        <View className="components-page__body">
          <View className="components-page__body-example example">
            <View className="example-progress">
              <Progress percent={20} showInfo strokeWidth={2} />
            </View>
            <View className="example-progress">
              <Progress percent={40} strokeWidth={2} active />
            </View>
            <View className="example-progress">
              <Progress percent={60} strokeWidth={2} active />
            </View>
            <View className="example-progress">
              <Progress
                percent={80}
                strokeWidth={2}
                active
                activeColor="blue" />
            </View>
          </View>
          <View className="components-page__body-example example">
            <View className="example-progress">
              <Progress
                showInfo
                strokeWidth={2}
                percent={progress}
                activeColor="#3C7FE8" />
            </View>
            <View>
              <Button style={{ marginBottom: Taro.pxTransform(10) }} onClick={this.handleStart}>加载</Button>
              <Button style={{ marginBottom: Taro.pxTransform(10) }} onClick={this.handleStop}>暂停</Button>
              <Button onClick={this.handleReset}>重置</Button>
            </View>
          </View>
        </View>

      </View>
    );
  }
}
