import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { Image, Text, View } from '@tarojs/components'
import Modal from "react-native-modal";
import { CommonEvent } from '@tarojs/components/types/common'
import { AtToastProps, AtToastState } from '../../../types/toast'
import statusImg from './img.json'
import AtActivityIndicator from "../activity-indicator";
import IconFont from '../icon-font'
import '../../style/components/toast.scss'

export default class AtToast extends React.Component<
  AtToastProps,
  AtToastState
> {
  public static defaultProps: AtToastProps
  public static propTypes: InferProps<AtToastProps>

  private _timer: NodeJS.Timeout | null

  public constructor(props: AtToastProps) {
    super(props)
    const { isOpened, duration } = props
    if (isOpened) {
      this.makeTimer(duration || 0)
    }
    this._timer = null
    this.state = {
      _isOpened: isOpened
    }
  }

  private clearTimmer(): void {
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  private makeTimer(duration: number): void {
    if (duration === 0) {
      return
    }
    this._timer = setTimeout(() => {
      this.close()
    }, +duration)
  }

  private close(): void {
    const { _isOpened } = this.state
    if (_isOpened) {
      this.setState(
        {
          _isOpened: false
        },
        this.handleClose // TODO: Fix dirty hack
      )
      this.clearTimmer()
    }
  }

  private handleClose(event?: CommonEvent): void {
    // TODO: Fix dirty hack
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose(event!)
    }
  }

  private handleClick = (event: CommonEvent): void => {
    const { onClick, status } = this.props
    if (status === 'loading') {
      return
    }
    if (onClick) {
      return onClick(event)
    }
    this.close()
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtToastProps): void {
    const { isOpened, duration } = nextProps
    if (!isOpened) {
      this.close()
      return
    }

    if (!this.state._isOpened) {
      this.setState({
        _isOpened: true
      })
    } else {
      this.clearTimmer()
    }
    this.makeTimer(duration || 0)
  }

  public render(): JSX.Element | null {
    const { _isOpened } = this.state
    const { customStyle, text, icon, status, image, hasMask } = this.props

    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const realImg = image || statusImg[status!] || null
    let isRenderIcon = !!(icon && !(image || statusImg[status!]))
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    if (status === 'loading') {
      isRenderIcon = false;
    }

    const bodyClass = classNames('toast-body', `toast-body--${Taro.getEnv()}`, {
      'at-toast__body--custom-image': image,
      'toast-body--text': !realImg && !icon,
      [`toast-body--${Taro.getEnv()}--text`]: !realImg && !icon,
      [`at-toast__body--${status}`]: !!status,
    })

    return _isOpened ? (
      <Modal
        animationIn='pulse'
        animationOut='fadeOut'
        isVisible={_isOpened}
        hasBackdrop={hasMask}
        backdropOpacity={0}
        onModalHide={this.handleClose}
        onBackButtonPress={this.handleClick}
        onBackdropPress={this.handleClick}
        style={{
          margin: 0,
        }}
      >
        <View
          className={bodyClass}
          style={customStyle}
          onClick={this.handleClick}
        >
          <View className='toast-body-content'>
            {status !== 'loading' && !!realImg && (
              <View className='toast-body-content__img'>
                <Image
                  className='toast-body-content__img-item'
                  src={realImg}
                  mode='scaleToFill'
                />
              </View>
            )}
            {isRenderIcon && status !== 'loading' && (
              <IconFont name={icon} size={80} />
            )}
            {status === 'loading' && (
              <AtActivityIndicator color='#fff' size={120} />
            )}
            {!!text && (
              <View
                className={classNames([
                  'toast-body-content__info',
                  `toast-body-content__info--${Taro.getEnv()}`,
                ], {
                  'toast-body-content__info--text': !realImg && !icon,
                  [`toast-body-content__info--text--${Taro.getEnv()}`]: !realImg && !icon,
                })}
              >
                <Text className='toast-body-content__info__text'>{text}</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    ) : null
  }
}

AtToast.defaultProps = {
  duration: 3000,
  isOpened: false
}

AtToast.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  hasMask: PropTypes.bool,
  image: PropTypes.string,
  isOpened: PropTypes.bool,
  duration: PropTypes.number,
  status: PropTypes.oneOf(['', 'error', 'loading', 'success']),
  onClick: PropTypes.func,
  onClose: PropTypes.func
}
