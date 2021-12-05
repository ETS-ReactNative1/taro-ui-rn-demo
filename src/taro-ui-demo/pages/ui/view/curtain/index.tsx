import {useState, useEffect} from 'react'
import { AtButton, AtCurtain } from '@/taro-ui'
import { Image, View, Text } from '@tarojs/components'
import curtainPng from '../../../../assets/images/curtain.png'
import DocsHeader from '../../components/doc-header'
import './index.scss'

function Index() {
  const [isOpened, setIsOpened] = useState(false);
  const [closeBtnPosition, setCloseBtnPosition] = useState('bottom');
  useEffect(() => {
    console.log('state closeBtnPosition', closeBtnPosition);
  }, [closeBtnPosition]);

  return (
    <View className='page'>
      {/* S Header */}
      <DocsHeader title='Curtain 幕帘' />
      {/* E Header */}

      {/* S Body */}
      <View className='doc-body'>
        <AtCurtain
          isOpened={isOpened}
          closeBtnPosition={closeBtnPosition}
          onClose={() => {
            setIsOpened(false);
          }}
        >
          <Image
            style={{
              width: '100%',
            }}
            mode='widthFix'
            src={curtainPng}
          />
        </AtCurtain>

        {/* 顶部关闭 */}
        <View className='doc-body__panel'>
          <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>顶部关闭</Text></View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtButton
                onClick={() => {
                  setIsOpened(true);
                  setCloseBtnPosition('top');
                }}
              >
                顶部关闭幕帘
              </AtButton>
            </View>
          </View>
        </View>

        {/* 底部关闭 */}
        <View className='doc-body__panel'>
          <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>底部关闭</Text></View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtButton
                onClick={() => {
                  setIsOpened(true);
                  setCloseBtnPosition('bottom');
                }}
              >
                底部关闭幕帘
              </AtButton>
            </View>
          </View>
        </View>

        {/* 左上关闭 */}
        <View className='doc-body__panel'>
          <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>左上关闭</Text></View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtButton
                onClick={() => {
                  setIsOpened(true);
                  setCloseBtnPosition('top-left');
                }}
              >
                左上关闭幕帘
              </AtButton>
            </View>
          </View>
        </View>

        {/* 右上关闭 */}
        <View className='doc-body__panel'>
          <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>右上关闭</Text></View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtButton
                onClick={() => {
                  setIsOpened(true);
                  setCloseBtnPosition('top-right');
                }}
              >
                右上关闭幕帘
              </AtButton>
            </View>
          </View>
        </View>

        {/* 左下关闭 */}
        <View className='doc-body__panel'>
          <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>左下关闭</Text></View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtButton
                onClick={() => {
                  setIsOpened(true);
                  setCloseBtnPosition('bottom-left');
                }}
              >
                左下关闭幕帘
              </AtButton>
            </View>
          </View>
        </View>

        {/* 右下关闭 */}
        <View className='doc-body__panel'>
          <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>右下关闭</Text></View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtButton
                onClick={() => {
                  setIsOpened(true);
                  setCloseBtnPosition('bottom-right');
                }}
              >
                右下关闭幕帘
              </AtButton>
            </View>
          </View>
        </View>
      </View>
      {/* E Body */}
    </View>
  )
}

export default Index;
