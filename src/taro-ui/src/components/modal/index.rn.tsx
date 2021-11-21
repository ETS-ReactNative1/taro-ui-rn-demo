import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Button, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import Modal from "react-native-modal";
import { AtModalProps, AtModalState } from '../../../types/modal'
import { handleTouchScroll } from '../../common/utils'
import AtModalAction from './action/index'
import AtModalContent from './content/index'
import AtModalHeader from './header/index'
import '../../style/components/modal.scss'
import AtModalButton from './button'

export default class AtModal extends React.Component<
  AtModalProps,
  AtModalState
> {
  public static defaultProps: AtModalProps
  public static propTypes: InferProps<AtModalProps>

  public constructor(props: AtModalProps) {
    super(props)
    const { isOpened } = props
    this.state = {
      _isOpened: isOpened,
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtModalProps): void {
    const { isOpened } = nextProps

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened)
    }

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
  }

  private handleClickOverlay = (): void => {
    if (this.props.closeOnClickOverlay) {
      this.setState(
        {
          _isOpened: false
        },
        this.handleClose
      )
    }
  }

  private handleClose = (event?: CommonEvent): void => {
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose(event!)
    }
  }

  private handleCancel = (event: CommonEvent): void => {
    if (typeof this.props.onCancel === 'function') {
      this.props.onCancel(event)
    }
  }

  private handleConfirm = (event: CommonEvent): void => {
    if (typeof this.props.onConfirm === 'function') {
      this.props.onConfirm(event)
    }
  }

  public render(): JSX.Element {
    const { _isOpened } = this.state
    const { title, content, cancelText, confirmText } = this.props

    if (title || content) {
      const isRenderAction = cancelText || confirmText;

      return (
        <Modal
          animationIn='pulse'
          animationOut='fadeOut'
          isVisible={_isOpened}
          hasBackdrop
          onModalHide={this.handleClose}
          onBackButtonPress={this.handleClickOverlay}
          onBackdropPress={this.handleClickOverlay}
          style={{
            margin: 0,
          }}
        >
          <View className={classNames('at-modal__container', `at-modal__container--${Taro.getEnv()}`)}>
            {title && (
              <AtModalHeader>
                <Text>{title}</Text>
              </AtModalHeader>
            )}
            {content && (
              <AtModalContent>
                <View className='content-simple'>
                  <Text>{content}</Text>
                </View>
              </AtModalContent>
            )}
            {isRenderAction && (
              <AtModalAction isSimple>
                {!!cancelText && (
                  <AtModalButton title={cancelText} onClick={this.handleCancel} index={0} />
                )}
                {!!confirmText && (
                  <AtModalButton title={confirmText} onClick={this.handleConfirm} index={1} />
                )}
              </AtModalAction>
            )}
          </View>
        </Modal>
      );
    }

    return (
      <Modal
        animationIn='pulse'
        animationOut='fadeOut'
        isVisible={_isOpened}
        hasBackdrop
        onModalHide={this.handleClose}
        onBackButtonPress={this.handleClickOverlay}
        onBackdropPress={this.handleClickOverlay}
        style={{
          margin: 0,
        }}
      >
        <View className={classNames('at-modal__container', `at-modal__container--${Taro.getEnv()}`)}>
          {this.props.children}
        </View>
      </Modal>
    );
  }
}

AtModal.defaultProps = {
  isOpened: false,
  closeOnClickOverlay: true
}

AtModal.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  content: PropTypes.string,
  closeOnClickOverlay: PropTypes.bool,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string
}
