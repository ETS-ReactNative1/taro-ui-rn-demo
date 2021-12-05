import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { Image, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtTabBarProps, TabItem } from '../../../types/tab-bar'
import { mergeStyle } from '../../common/utils'
import AtBadge from '../badge/index'
import AtIcon from '../icon'
import '../../style/components/tab-bar.scss'

export default class AtTabBar extends React.Component<AtTabBarProps> {
  public static defaultProps: AtTabBarProps
  public static propTypes: InferProps<AtTabBarProps>

  // constructor () {
  //   super(...arguments)
  //   this.state = {
  //     isIPhoneX: false
  //   }
  // }

  // componentDidMount () {
  //   const curEnv = Taro.getEnv()

  //   if (
  //     curEnv === Taro.ENV_TYPE.WEAPP &&
  //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
  //   ) {
  //     this.setState({ isIPhoneX: true })
  //   }
  // }

  private handleClick(index: number, event: CommonEvent): void {
    this.props.onClick(index, event)
  }

  public render(): JSX.Element {
    const {
      customStyle = {},
      className,
      fixed,
      backgroundColor,
      tabList,
      current,
      color,
      iconSize,
      fontSize,
      selectedColor
    } = this.props
    // const { isIPhoneX } = this.state

    const defaultStyle: React.CSSProperties = {}
    if (color) {
      defaultStyle.color = color;
    }

    const selectedStyle: React.CSSProperties = {}
    if (selectedColor) {
      selectedStyle.color = selectedColor;
    }

    const titleStyle: React.CSSProperties = {}
    if (fontSize) {
      titleStyle.fontSize = Taro.pxTransform(fontSize);
    }

    const rootStyle: React.CSSProperties = {}
    if (backgroundColor) {
      rootStyle.backgroundColor = backgroundColor;
    }

    const imgStyle = {
      width: Taro.pxTransform(iconSize),
      height: Taro.pxTransform(iconSize),
    }

    return (
      <View
        className={classNames(
          {
            'at-tab-bar': true,
            'at-tab-bar--fixed': fixed
            // 'at-tab-bar--ipx': isIPhoneX
          },
          className
        )}
        style={mergeStyle(rootStyle, customStyle)}
      >
        {tabList.map((item: TabItem, i: number) => (
          <View
            className={classNames('at-tab-bar__item', {
              'at-tab-bar__item--active': current === i
            })}
            style={current === i ? selectedStyle : defaultStyle}
            key={item.title}
            onClick={this.handleClick.bind(this, i)}
          >
            {!!item.iconType && (
              <AtBadge
                dot={!!item.dot}
                value={item.text}
                maxValue={Number(item.max)}
              >
                <View className='at-tab-bar__icon'>
                  <AtIcon
                    value={current === i && item.selectedIconType ? item.selectedIconType : item.iconType}
                    color={current === i ? selectedColor : color}
                    size={iconSize ? iconSize : 48}
                  />
                </View>
              </AtBadge>
            )}

            {!!item.image && (
              <View className='at-tab-bar__icon'>
                <AtBadge
                  dot={!!item.dot}
                  value={item.text}
                  maxValue={Number(item.max)}
                >
                  <Image
                    className={classNames('at-tab-bar__inner-img', {
                      'at-tab-bar__inner-img--inactive': current !== i
                    })}
                    mode='widthFix'
                    src={item.selectedImage || item.image}
                    style={imgStyle}
                  />
                  <Image
                    className={classNames('at-tab-bar__inner-img', {
                      'at-tab-bar__inner-img--inactive': current === i
                    })}
                    mode='widthFix'
                    src={item.image}
                    style={imgStyle}
                  />
                </AtBadge>
              </View>
            )}

            <View className='at-tab-bar__title' style={titleStyle}>
              <AtBadge
                dot={item.iconType || item.image ? false : !!item.dot}
                value={item.iconType || item.image ? '' : item.text}
                maxValue={item.iconType || item.image ? 0 : Number(item.max)}
              >
                <Text className='at-tab-bar__title__text'>{item.title}</Text>
              </AtBadge>
            </View>

          </View>
        ))}
      </View>
    )
  }
}

AtTabBar.defaultProps = {
  customStyle: {},
  className: '',
  fixed: false,
  current: 0,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {},
  selectedColor: '#6190E8',
}

AtTabBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fixed: PropTypes.bool,
  backgroundColor: PropTypes.string,
  current: PropTypes.number,
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
