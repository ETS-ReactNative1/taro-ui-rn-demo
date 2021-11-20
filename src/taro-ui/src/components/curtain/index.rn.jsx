import classNames from 'classnames'
import { View } from '@tarojs/components'
import Modal from "react-native-modal";
import noop from 'lodash/noop';
import IconFont from '../icon-font';
import '../../style/components/curtain.scss';

function AtCurtain({ isOpened = false, closeBtnPosition = 'bottom', onClose = noop, children }) {
  const btnCloseClass = classNames({
    'at-curtain__btn-close': true,
    'at-curtain__btn-close--image': true,
    [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition
  });

  return (
    <Modal
      animationIn='pulse'
      animationOut='fadeOut'
      isVisible={isOpened}
      hasBackdrop
      onModalHide={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <View className='at-curtain__container'>
        <View className='at-curtain__body'>
          {children}
          <View
            className={btnCloseClass}
            onClick={(e) => {
              e && e.stopPropagation && e.stopPropagation()
              onClose(e)
            }}
          >
            <IconFont name='close-circle' size={48} color='#fff' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AtCurtain;
