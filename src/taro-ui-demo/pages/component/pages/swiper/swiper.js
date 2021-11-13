import './swiper.scss'
import React from 'react'

import { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Switch,
  Slider
} from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: true,
      verticalIsCircular: true,
      isAutoplay: false,
      verticalIsAutoplay: false,
      hasIndicatorDots: true,
      verticalHasIndicatorDots: true,
    }
  }

  setAutoPlay = (e) => {
    this.setState({
      isAutoplay: e.detail.value
    })
  }

  setVerticalAutoPlay = (e) => {
    this.setState({
      verticalIsAutoplay: e.detail.value
    })
  }

  setCircular = (e) => {
    this.setState({
      isCircular: e.detail.value
    })
  }

  setVerticalCircular = (e) => {
    this.setState({
      verticalIsCircular: e.detail.value
    })
  }

  setIndicatorDots = e => {
    this.setState({
      hasIndicatorDots: e.detail.value
    })
  }

  setVerticalIndicatorDots = e => {
    this.setState({
      verticalHasIndicatorDots: e.detail.value
    })
  }

  setInterval = e => {
    this.setState({
      interval: e.detail.value
    })
  }

  setDuration = e => {
    console.log(this)
    this.setState({
      duration: e.detail.value
    })
  }

  render() {
    const { current, isAutoplay, duration, isCircular, interval, hasIndicatorDots, verticalIsCircular, verticalHasIndicatorDots, verticalIsAutoplay } = this.state
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Swiper' />
        </View>
        <View className='swiper-components-page__body swiper'>
          <View className='swiper-components-page__body-example'>
            <View className='example-header'>
              <Text className='example-header-text'>Swiper 横向滑动</Text>
            </View>
            <View className='example-body'>
              <Swiper
                slideMult='10'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                current={current}
                duration={duration}
                interval={interval}
                circular={isCircular}
                autoplay={isAutoplay}
                indicatorDots={hasIndicatorDots}
                preMargin='20'
              >
                <SwiperItem>
                  <View className='demo-text-1 swiper-demo-text-1' />
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-2 swiper-demo-text-2' />
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-3 swiper-demo-text-3' />
                </SwiperItem>
              </Swiper>
              <View className='swiper-switch-list'>
                <View className='swiper-switch-list__item swiper-switch-list__item-0'>
                  <View className='swiper-switch-list__text'>指示点</View>
                  <Switch checked={hasIndicatorDots} onChange={this.setIndicatorDots} />
                </View>
                <View className='swiper-switch-list__item'>
                  <View className='swiper-switch-list__text'>自动播放</View>
                  <Switch checked={isAutoplay} onChange={this.setAutoPlay} />
                </View>
                <View className='swiper-switch-list__item'>
                  <View className='swiper-switch-list__text'>循环播放</View>
                  <Switch checked={isCircular} onChange={this.setCircular} />
                </View>
              </View>
              <View className='swiper-slider-list'>
                <View className='swiper-slider-list__item'>
                  <View className='swiper-slider-list__item-header'>
                    <Text>幻灯片切换时长(ms)</Text>
                  </View>
                  <View className='swiper-slider-list__item-body'>
                    <Slider
                      showValue
                      step={1}
                      min={500}
                      max={2000}
                      value={duration}
                      onChange={this.setDuration}></Slider>
                  </View>
                </View>
                <View className='swiper-slider-list__item'>
                  <View className='swiper-slider-list__item-header'>
                    <Text>自动播放间隔时长(ms)</Text>
                  </View>
                  <View className='swiper-slider-list__item-body'>
                    <Slider
                      showValue
                      step={1}
                      min={2000}
                      max={10000}
                      value={this.state.interval}
                      onChange={this.setInterval} ></Slider>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text className='example-header-text'>Swiper 纵向滑动</Text>
            </View>
            <View className='example-body'>
              <Swiper
                slideMult='10'
                className='test-h'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                vertical
                circular={verticalIsCircular}
                indicatorDots={verticalHasIndicatorDots}
                autoplay={verticalIsAutoplay}
                preMargin='20'>
                <SwiperItem>
                  <View className='demo-text-1'></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-2'></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-3'></View>
                </SwiperItem>
              </Swiper>
            </View>
            <View className='swiper-switch-list'>
              <View className='swiper-switch-list__item'>
                <View className='swiper-switch-list__text'>指示点</View>
                <Switch checked={verticalHasIndicatorDots} onChange={this.setVerticalIndicatorDots} ></Switch>
              </View>
              <View className='swiper-switch-list__item'>
                <View className='swiper-switch-list__text'>自动播放</View>
                <Switch checked={verticalIsAutoplay} onChange={this.setVerticalAutoPlay} ></Switch>
              </View>
              <View className='swiper-switch-list__item'>
                <View className='swiper-switch-list__text'>循环播放</View>
                <Switch checked={verticalIsCircular} onChange={this.setVerticalCircular} ></Switch>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
