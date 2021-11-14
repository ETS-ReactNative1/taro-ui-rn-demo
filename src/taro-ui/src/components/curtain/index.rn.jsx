import classNames from 'classnames'
import {useEffect, useState} from 'react'
import { View, Image } from '@tarojs/components'
import RootSiblings from 'react-native-root-siblings';
import noop from 'lodash/noop';
import '../../style/components/curtain.scss';

function AtCurtain({ customStyle, className, isOpened = false, closeBtnPosition = 'bottom', onClose = noop, children }) {
  const [sibling, setSibling] = useState(null);

  useEffect(() => {
    sibling && sibling.destroy();
    console.log(isOpened);
    if (isOpened) {
      if (!sibling) {
        const curtainClass = classNames(
          {
            'at-curtain': true,
            'at-curtain--closed': !isOpened
          },
          className
        )
        const btnCloseClass = classNames({
          'at-curtain__btn-close': true,
          'at-curtain__btn-close--image': true,
          [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition
        });

        setSibling(new RootSiblings(
          <View
            className={curtainClass}
            style={customStyle}
            onClick={(e) => {
              e && e.stopPropagation && e.stopPropagation()
            }}
          >
            <View className='at-curtain__container'>
              <View className='at-curtain__body'>
                {children}
                <Image
                  src={require('../../assets/close.png')}
                  className={btnCloseClass}
                  onClick={(e) => {
                    e && e.stopPropagation && e.stopPropagation()
                    onClose(e)
                  }}
                />
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
  }, [children, className, closeBtnPosition, customStyle, isOpened, onClose]);

  return null;
}

export default AtCurtain;
