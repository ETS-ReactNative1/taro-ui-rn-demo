import classNames from 'classnames'
import {useEffect, useState} from 'react'
import {View, Text, ScrollView} from '@tarojs/components'
import Taro from '@tarojs/taro';
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
  const [sibling, setSibling] = useState(null);

  useEffect(() => {
    sibling && sibling.destroy();
    console.log(isOpened);
    if (isOpened) {
      if (!sibling) {
        setSibling(new RootSiblings(
          <View
            className={classNames(
              'at-float-layout',
              `at-float-layout-${Taro.getEnv()}`,
              {
                'at-float-layout--active': isOpened
              },
              className
            )}
            onTouchMove={(e) => {
              e && e.stopPropagation && e.stopPropagation()
            }}
          >
            <View
              onClick={() => {
                isFunction(onClose) && onClose();
              }}
              className={classNames(['at-float-layout__overlay'], {
                'at-float-layout__overlay--active': isOpened,
              })}
            />
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
          </View>
        ));
      }
    } else {
      sibling && setSibling(null);
    }

    return () => {
      sibling && sibling.destroy();
    };
  }, [children, className, isOpened, lowerThreshold, onClose, scrollLeft, scrollTop, scrollWithAnimation, scrollX, scrollY, title, upperThreshold]);

  return null;
}

export default AtFloatLayout;
