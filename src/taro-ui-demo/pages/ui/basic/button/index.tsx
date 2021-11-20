import React from 'react'
import { AtButton, AtFab, AtForm } from '@/taro-ui'
import { Form, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro, { ShareAppMessageReturn } from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import IconFont from '@/taro-ui/components/icon-font'
import './index.scss'

interface ButtonPageState {
  isWEAPP: boolean
  isALIPAY: boolean
}

export default class ButtonPage extends React.Component<{}, ButtonPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
    }
  }

  private onButtonClick(): void {
    const content = [...arguments].find(item => typeof item === 'string')
    const ENV = Taro.getEnv()
    if (ENV === 'WEB') {
      alert(content || '您点击了按钮！')
    } else {
      Taro.showModal({
        content: content || '您点击了按钮！',
        showCancel: false
      })
    }
  }

  public onShareAppMessage(): ShareAppMessageReturn {
    return {
      title: 'Taro UI',
      path: '/pages/ui/index/index',
      imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
    }
  }

  private onContact(event: CommonEvent): void {
    Taro.showToast({
      title: `呼起客服回调: ${event.detail}`
    })
  }

  private onSubmit(event: CommonEvent): void {
    Taro.showModal({
      content: `submit event detail: ${JSON.stringify(event.detail)}`,
      showCancel: false
    })
  }

  private onReset(event: CommonEvent): void {
    Taro.showModal({
      content: `reset event detail: ${JSON.stringify(
        event.detail || '无数据'
      )}`,
      showCancel: false
    })
  }

  private onGetUserInfo(event: CommonEvent): void {
    Taro.showModal({
      content: `getUserInfo event detail: ${JSON.stringify(event.detail)}`
    })
  }

  private onOpenSetting(event: CommonEvent): void {
    Taro.showToast({
      title: `onOpenSetting: ${event.detail}`
    })
  }

  public render(): JSX.Element {
    const { isWEAPP, isALIPAY } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Button 按钮' />
        {/* E Header */}
        {/* S Body */}
        <View className='doc-body'>
          {/* 主操作 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>主操作</Text></View>
            <View
              className='panel__content'
              style={{
                paddingLeft: Taro.pxTransform(20),
                paddingRight: Taro.pxTransform(20),
              }}
            >
              <View className='panel__content__btn-item'>
                <AtButton
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  主操作按钮
                </AtButton>
              </View>
              <View className='panel__content__btn-item'>
                <AtButton
                  type='primary'
                  loading
                  onClick={this.onButtonClick.bind(this)}
                >
                  Loading
                </AtButton>
              </View>
              <View className='panel__content__btn-item'>
                <AtButton type='primary' disabled>
                  不可操作
                </AtButton>
              </View>
            </View>
          </View>

          {/* 次要操作 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>次要操作</Text></View>
            <View
              className='panel__content'
              style={{
                paddingLeft: Taro.pxTransform(20),
                paddingRight: Taro.pxTransform(20),
              }}
            >
              <View className='panel__content__btn-item'>
                <AtButton type='secondary'>次操作按钮</AtButton>
              </View>
              <View className='panel__content__btn-item'>
                <AtButton type='secondary' loading>
                  Loading
                </AtButton>
              </View>
              <View className='panel__content__btn-item'>
                <AtButton type='secondary' disabled>
                  不可操作
                </AtButton>
              </View>
            </View>
          </View>

          {/* 次次要操作 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>次次要操作</Text></View>
            <View
              className='panel__content'
              style={{
                paddingLeft: Taro.pxTransform(20),
                paddingRight: Taro.pxTransform(20),
              }}
            >
              <View className='panel__content__btn-item'>
                <AtButton>次次要操作按钮</AtButton>
              </View>
              <View className='panel__content__btn-item'>
                <AtButton loading>Loading</AtButton>
              </View>
              <View className='panel__content__btn-item'>
                <AtButton disabled>不可操作</AtButton>
              </View>
            </View>
          </View>

          {/* 通栏 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>通栏按钮</Text></View>
            <View className='panel__content' style='padding:0'>
              <View className='panel__content__btn-item'>
                <AtButton type='primary' full>
                  主操作按钮
                </AtButton>
              </View>
              <View className='panel__content__btn-item'>
                <AtButton type='secondary' full>
                  次操作按钮
                </AtButton>
              </View>
              <View className='panel__content__btn-item'>
                <AtButton full>次次要操作按钮</AtButton>
              </View>
              <View className='panel__content__btn-item'>
                <AtButton disabled full>
                  不可操作
                </AtButton>
              </View>
            </View>
          </View>

          {/* 小按钮 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>小按钮</Text></View>
            <View className='panel__content'>
              <View className='panel__content__btn-item'>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='primary' size='small'>
                    按钮
                  </AtButton>
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='secondary' size='small'>
                    按钮
                  </AtButton>
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton size='small'>按钮</AtButton>
                </View>
              </View>
              <View className='panel__content__btn-item'>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='primary' size='small' loading />
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='secondary' size='small' loading />
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton size='small' loading />
                </View>
              </View>
              <View className='panel__content__btn-item'>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='primary' size='small' disabled>
                    按钮
                  </AtButton>
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='secondary' size='small' disabled>
                    按钮
                  </AtButton>
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton size='small' disabled>
                    按钮
                  </AtButton>
                </View>
              </View>
            </View>
          </View>

          {/* 圆角按钮 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>圆角按钮</Text></View>
            <View className='panel__content'>
              <View className='panel__content__btn-item'>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='primary' size='small' circle>
                    按钮
                  </AtButton>
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='secondary' size='small' circle>
                    按钮
                  </AtButton>
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton size='small' circle>
                    按钮
                  </AtButton>
                </View>
              </View>
              <View className='panel__content__btn-item'>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton
                    type='primary'
                    size='small'
                    loading
                    circle
                  />
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton
                    type='secondary'
                    size='small'
                    loading
                    circle
                  />
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton size='small' loading circle />
                </View>
              </View>
              <View className='panel__content__btn-item'>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='primary' size='small' disabled circle>
                    按钮
                  </AtButton>
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton type='secondary' size='small' disabled circle>
                    按钮
                  </AtButton>
                </View>
                <View className='panel__content__btn-item__sub-item'>
                  <AtButton size='small' disabled circle>
                    按钮
                  </AtButton>
                </View>
              </View>
            </View>
          </View>

          {/* 浮动按钮 */}
          {!isALIPAY && (
            <View className='doc-body__panel'>
              <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>浮动按钮</Text></View>
              <View className='panel__content'>
                <View className='at-article__p'>右侧是浮动操作按钮👉</View>
                <View className='panel__content__btn-demo-fab'>
                  <AtFab onClick={this.onButtonClick.bind(this)}>
                    <IconFont name='menu' size={48} color='#fff' />
                  </AtFab>
                </View>
              </View>
            </View>
          )}

          {/* 微信小程序 button 属性（仅部分支持） */}
          {isWEAPP && (
            <View className='doc-body__panel'>
              <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>微信小程序 button 属性</Text></View>
              <View className='panel__content'>
                <View className='panel__content__btn-item'>
                  <AtButton openType='share' type='primary'>
                    分享
                  </AtButton>
                </View>
                <View className='panel__content__btn-item'>
                  <AtButton
                    openType='getUserInfo'
                    onGetUserInfo={this.onGetUserInfo.bind(this)}
                    type='primary'
                  >
                    登录授权
                  </AtButton>
                </View>
                <View className='panel__content__btn-item'>
                  <AtButton
                    openType='contact'
                    onContact={this.onContact.bind(this)}
                    type='secondary'
                  >
                    联系 Taro UI 客服
                  </AtButton>
                </View>
                <View className='panel__content__btn-item'>
                  <AtButton
                    openType='openSetting'
                    onOpenSetting={this.onOpenSetting.bind(this)}
                    type='secondary'
                  >
                    打开设置
                  </AtButton>
                </View>
                <View className='panel__content__btn-item'>
                  <Form
                    reportSubmit
                    onSubmit={this.onSubmit.bind(this)}
                    onReset={this.onReset.bind(this)}
                  >
                    <View className='panel__content__btn-item'>
                      <AtButton type='primary' formType='submit'>
                        form submit
                      </AtButton>
                    </View>
                    <View className='panel__content__btn-item'>
                      <AtButton type='secondary' formType='reset'>
                        form reset
                      </AtButton>
                    </View>
                  </Form>
                </View>
              </View>
            </View>
          )}

          {/* 支付宝小程序 button 属性（仅部分支持） */}
          {isALIPAY && (
            <View className='doc-body__panel'>
              <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>支付宝小程序 button 属性</Text></View>
              <View className='panel__content demo-button'>
                <View className='panel__content__btn-item'>
                  <AtButton openType='share' type='primary'>
                    分享
                  </AtButton>
                </View>
                <View className='panel__content__btn-item'>
                  <AtButton openType='getAuthorize' type='primary'>
                    登录授权
                  </AtButton>
                </View>
                <AtForm
                  onSubmit={this.onSubmit.bind(this)}
                  onReset={this.onReset.bind(this)}
                >
                  <View className='panel__content__btn-item'>
                    <AtButton formType='submit' type='primary'>
                      form submit
                    </AtButton>
                  </View>
                  <View className='panel__content__btn-item'>
                    <AtButton formType='reset' type='primary'>
                      form reset
                    </AtButton>
                  </View>
                </AtForm>
              </View>
            </View>
          )}
        </View>
        {/* E Body */}
      </View>
    )
  }
}
