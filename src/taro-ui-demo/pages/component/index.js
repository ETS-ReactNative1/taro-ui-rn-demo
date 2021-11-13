import Taro from '@tarojs/taro'
import React from 'react'
import classNames from 'classnames';
import { View, Image, Text } from '@tarojs/components'
import logo from '../../assets/component/logo.png'
import viewPng from '../../assets/component/view.png'
import contentPng from '../../assets/component/content.png'
import formPng from '../../assets/component/form.png'
import navPng from '../../assets/component/nav.png'
import mediaPng from '../../assets/component/media.png'
import mapPng from '../../assets/component/map.png'
import canvasPng from '../../assets/component/canvas.png'
import './index.scss'

const PNGS = {
  viewPng,
  contentPng,
  formPng,
  navPng,
  mediaPng,
  mapPng,
  canvasPng
}

export default class Index extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {
      list: [
        {
          id: 'view',
          name: '视图容器',
          open: false,
          pages: ['view', 'scroll-view', 'swiper']
        },
        {
          id: 'content',
          name: '基础内容',
          open: false,
          pages: ['text', 'icon', 'progress']
        },
        {
          id: 'form',
          name: '表单组件',
          open: false,
          pages: [
            'button',
            'checkbox',
            'form',
            'input',
            'label',
            'picker',
            'picker-view',
            'radio',
            'slider',
            'switch',
            'textarea'
          ]
        },
        {
          id: 'nav',
          name: '导航',
          open: false,
          pages: ['navigator']
        },
        {
          id: 'media',
          name: '媒体组件',
          open: false,
          pages: ['image', 'audio', 'video', 'camera']
        },
        {
          id: 'map',
          name: '地图',
          pages: ['map']
        },
        {
          id: 'canvas',
          name: '画布',
          pages: ['canvas']
        }
      ]
    }
  }

  render () {
    return (
      <View className='index'>
        <View className='index-hd'>
          <Image className='index-logo' src={logo} />
          <View className='index-desc'>
            <Text className='index-desc_text'>以下将展示Taro官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式。</Text>
          </View>
        </View>
        <View className='index-bd'>
          <View className='kind-list'>
            {this.state.list
              .map((item) => {
                item.hdClass = 'kind-list-item-hd ' + (item.open ? 'kind-list-item-hd-show' : '')
                item.bdClass = 'kind-list-item-bd ' + (item.open ? 'kind-list-item-bd-show' : '')

                item.boxClass = 'navigator-box ' + (item.open ? 'navigator-box-show' : '')
                item.boxStyle = item.open ? {
                  transform: process.env.TARO_ENV === 'rn' ? [ { translateY: 0 } ] : 'translateY(0)',
                } : {};

                item.imgSrc = PNGS[`${item.id}Png`]
                item._pages = item.pages.map(page => {
                  return {
                    page: page,
                    url: `/pages/component/pages/${page}/${page}`
                  }
                })
                return item
              })
              .map((item, index) => {
                return (
                  <View className='kind-list-item' key={index}>
                    <View
                      className={item.hdClass}
                      onClick={() => {
                        console.log(item);
                        const list = this.state.list
                        for (var i = 0, len = list.length; i < len; ++i) {
                          if (list[i].id === item.id) {
                            list[i].open = !list[i].open
                          } else {
                            list[i].open = false
                          }
                        }
                        this.setState({
                          list: list
                        })
                      }}
                    >
                      <View className='kind-list-text'>
                        <Text>{item.name}</Text>
                      </View>
                      <Image className='kind-list-img' src={item.imgSrc} />
                    </View>
                    <View className={item.bdClass}>
                      <View className={item.boxClass} style={item.boxStyle}>
                        {item._pages.map((page, j) => {
                          return (
                            <View
                              onClick={() => {
                                Taro.navigateTo({
                                  url: page.url
                                })
                              }}
                              key={`${index}-${j}`}
                              className={classNames(['navigator', `navigator-${j}`])}
                            >
                              <Text className='navigator-text'>{page.page}</Text>
                              <Image mode='aspectFill' className='navigator-arrow' src={require('../../assets/images/right.png')} />
                            </View>
                          )
                        })}
                      </View>
                    </View>
                  </View>
                )
              })}
          </View>
        </View>
      </View>
    )
  }
}
