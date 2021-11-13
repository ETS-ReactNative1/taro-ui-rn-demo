import React from 'react'
import { AtAvatar } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class AvatarPage extends React.Component {
  public render(): JSX.Element {
    const avatarImg = 'https://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Avatar 头像' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 圆形头像 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>圆形头像</Text></View>
            <View className='panel__content'>
              <View className='avatar-example-item'>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar circle size='small' image={avatarImg} />
                </View>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar circle image={avatarImg} />
                </View>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar circle size='large' image={avatarImg} />
                </View>
              </View>
            </View>
          </View>

          {/* 圆角矩形头像 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>圆角矩形头像</Text></View>
            <View className='panel__content'>
              <View className='avatar-example-item'>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar size='small' image={avatarImg} />
                </View>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar image={avatarImg} />
                </View>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar size='large' image={avatarImg} />
                </View>
              </View>
            </View>
          </View>

          {/* 圆形头像（支持文本） */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>圆形头像（支持文本）</Text></View>
            <View className='panel__content'>
              <View className='avatar-example-item'>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar circle size='small' text='凹' />
                </View>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar circle text='凹' />
                </View>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar circle size='large' text='凹' />
                </View>
              </View>
            </View>
          </View>

          {/* 圆角矩形头像（支持文本） */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>圆角矩形头像（支持文本）</Text></View>
            <View className='panel__content'>
              <View className='avatar-example-item'>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar size='small' text='凹' />
                </View>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar text='凹' />
                </View>
                <View className='avatar-example-item__sub-item'>
                  <AtAvatar size='large' text='凹' />
                </View>
              </View>
            </View>
          </View>

          {/* openData 头像（仅微信小程序支持） */}
          {Taro.getEnv() === Taro.ENV_TYPE.WEAPP && (
            <View className='doc-body__panel'>
              <View className='doc-body__panel__title'>
                <Text className='doc-body__panel__title__text'>openData 头像（仅微信小程序支持）</Text>
              </View>
              <View className='panel__content'>
                <View className='avatar-example-item'>
                  <View className='avatar-example-item__sub-item'>
                    <AtAvatar
                      openData={{ type: 'userAvatarUrl' }}
                      size='small'
                    ></AtAvatar>
                  </View>
                  <View className='avatar-example-item__sub-item'>
                    <AtAvatar openData={{ type: 'userAvatarUrl' }}></AtAvatar>
                  </View>
                  <View className='avatar-example-item__sub-item'>
                    <AtAvatar
                      size='large'
                      openData={{ type: 'userAvatarUrl' }}
                    ></AtAvatar>
                  </View>
                  <View className='avatar-example-item__sub-item'>
                    <AtAvatar
                      size='large'
                      circle
                      openData={{ type: 'userAvatarUrl' }}
                    ></AtAvatar>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
        {/* E Body */}
      </View>
    )
  }
}
