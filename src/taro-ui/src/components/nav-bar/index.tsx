import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro';
import { Text, View } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import { AtNavBarProps } from '../../../types/nav-bar'
import '../../style/components/nav-bar.scss';
import AtIcon from '../icon';

export default class AtNavBar extends React.Component<AtNavBarProps> {
  public static defaultProps: AtNavBarProps
  public static propTypes: InferProps<AtNavBarProps>

  private handleClickLeftView(event: ITouchEvent): void {
    this.props.onClickLeftIcon && this.props.onClickLeftIcon(event)
  }

  private handleClickSt(event: ITouchEvent): void {
    this.props.onClickRgIconSt && this.props.onClickRgIconSt(event)
  }

  private handleClickNd(event: ITouchEvent): void {
    this.props.onClickRgIconNd && this.props.onClickRgIconNd(event)
  }

  public render(): JSX.Element {
    const {
      customStyle,
      className,
      color,
      fixed,
      border,
      leftIconType,
      leftText,
      title,
      rightFirstIconType,
      rightSecondIconType
    } = this.props

    const linkStyle: React.CSSProperties = { color }

    const defaultIconInfo = {
      customStyle: {},
      className: '',
      value: '',
      color: '#6190E8',
      size: 48
    }

    const leftIconInfo: any =
      leftIconType instanceof Object
        ? { ...defaultIconInfo, ...leftIconType }
        : { ...defaultIconInfo, value: leftIconType }

    const rightFirstIconInfo =
      rightFirstIconType instanceof Object
        ? { ...defaultIconInfo, ...rightFirstIconType }
        : { ...defaultIconInfo, value: rightFirstIconType }

    const rightSecondIconInfo =
      rightSecondIconType instanceof Object
        ? { ...defaultIconInfo, ...rightSecondIconType }
        : { ...defaultIconInfo, value: rightSecondIconType }

    return (
      <View
        className={classNames(
          {
            'at-nav-bar': true,
            'at-nav-bar--fixed': fixed,
            'at-nav-bar--no-border': !border
          },
          className
        )}
        style={customStyle}
      >
        <View
          className='at-nav-bar__left-view'
          onClick={this.handleClickLeftView.bind(this)}
          style={linkStyle}
        >
          {!!leftIconType && (
            <AtIcon {...leftIconInfo} />
          )}
          {!!leftText && (
            <Text className='at-nav-bar__left-view__text'>{leftText}</Text>
          )}
        </View>

        <View
          className={classNames('at-nav-bar__title', `at-nav-bar__title-${Taro.getEnv()}`)}
        >
          <Text
            className={classNames('at-nav-bar__title__text', `at-nav-bar__title__text-${Taro.getEnv()}`)}
            numberOfLines={1}
          >
            {title || this.props.children}
          </Text>
        </View>

        <View className='at-nav-bar__right-view'>
          <View
            className={classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightSecondIconType
            })}
            style={linkStyle}
            onClick={this.handleClickNd.bind(this)}
          >
            {!!rightSecondIconType && (
              <AtIcon {...rightSecondIconInfo} />
            )}
          </View>
          <View
            className={classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightFirstIconType
            })}
            style={linkStyle}
            onClick={this.handleClickSt.bind(this)}
          >
            {!!rightFirstIconType && (
              <AtIcon {...rightFirstIconInfo} />
            )}
          </View>
        </View>
      </View>
    )
  }
}

AtNavBar.defaultProps = {
  customStyle: {},
  className: '',
  fixed: false,
  border: true,
  color: '',
  leftIconType: '',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: ''
}

AtNavBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fixed: PropTypes.bool,
  border: PropTypes.bool,
  color: PropTypes.string,
  leftIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  leftText: PropTypes.string,
  title: PropTypes.string,
  rightFirstIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rightSecondIconType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onClickLeftIcon: PropTypes.func,
  onClickRgIconSt: PropTypes.func,
  onClickRgIconNd: PropTypes.func
}
