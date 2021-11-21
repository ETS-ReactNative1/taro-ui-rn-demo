import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtDividerProps } from '../../../types/divider'
import { mergeStyle } from '../../common/utils'
import '../../style/components/divider.scss';

export default class AtDivider extends React.Component<AtDividerProps> {
  public static defaultProps: AtDividerProps
  public static propTypes: InferProps<AtDividerProps>

  public render(): JSX.Element {
    const {
      className,
      customStyle,
      content,
      height,
      fontColor,
      fontSize,
      lineColor
    } = this.props

    const rootStyle = {
      height: height ? Taro.pxTransform(Number(height)) : 0
    }

    const fontStyle: React.CSSProperties = { }
    if (fontColor) {
      fontStyle.color = fontColor;
    }
    if (fontSize) {
      fontStyle.fontSize = Taro.pxTransform(Number(fontSize));
    }

    const lineStyle: React.CSSProperties = lineColor ? {
      backgroundColor: lineColor
    } : {};

    return (
      <View
        className={classNames('at-divider', className)}
        style={mergeStyle(rootStyle, customStyle as object)}
      >
        <View className='at-divider__line at-divider__line__left' style={lineStyle} />
        <View className='at-divider__content'>
          {
            content === ''
              ? this.props.children
              : (React.isValidElement(content) ? content : <Text className='at-divider__content__text' style={fontStyle}>{content}</Text>)
          }
        </View>
        <View className='at-divider__line at-divider__line__right' style={lineStyle} />
      </View>
    )
  }
}

AtDivider.defaultProps = {
  content: '',
  height: 0,
  fontColor: '',
  fontSize: 0,
  lineColor: ''
}

AtDivider.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  content: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontColor: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lineColor: PropTypes.string
}
