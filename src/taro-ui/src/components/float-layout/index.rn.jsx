import classNames from 'classnames'
import {useEffect, useState} from 'react'
import {View, Text, ScrollView} from '@tarojs/components'
import Taro from '@tarojs/taro';
import Modal from "react-native-modal";
import isFunction from 'lodash/isFunction';
import RootSiblings from 'react-native-root-siblings';
import noop from 'lodash/noop';
import IconFont from '../icon-font';
import '../../style/components/float-layout.scss';

function AtFloatLayout({
  className,
  title = '',
  isOpened = false,
  scrollY = true,
  scrollX = false,
  scrollWithAnimation = false,
  scrollTop,
  scrollLeft,
  upperThreshold,
  lowerThreshold,
  onClose = noop,
  onScroll = noop,
  onScrollToLower = noop,
  onScrollToUpper = noop,
  children
}) {
  return (
    <Modal
      animationIn='fadeInUp'
      animationOut='fadeOutDown'
      isVisible={isOpened}
      hasBackdrop
      onModalHide={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={{
        margin: 0,
      }}
    >
      <View className='at-float-layout__container'>
        {!!title && (
          <View className='at-float-layout-header'>
            <Text className='at-float-layout-header__title' numberOfLines={1}>{title}</Text>
            <View
              className={classNames(['at-float-layout-header__btn-close', `at-float-layout-header__btn-close-${Taro.getEnv()}`])}
              onClick={() => {
                isFunction(onClose) && onClose();
              }}
            >
              <IconFont name='close' size={36} />
            </View>
          </View>
        )}
        <View className='at-float-layout-body'>
          <ScrollView
            scrollY={scrollY}
            scrollX={scrollX}
            scrollTop={scrollTop}
            scrollLeft={scrollLeft}
            upperThreshold={upperThreshold}
            lowerThreshold={lowerThreshold}
            scrollWithAnimation={scrollWithAnimation}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore // TODO: Fix typings
            onScroll={onScroll}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore // TODO: Fix typings
            onScrollToLower={onScrollToLower}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore // TODO: Fix typings
            onScrollToUpper={onScrollToUpper}
            className='at-float-layout-body__content'
          >
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

export default AtFloatLayout;
