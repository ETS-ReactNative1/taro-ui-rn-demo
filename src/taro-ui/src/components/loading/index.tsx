import PropTypes, { InferProps } from 'prop-types'
import Taro from '@tarojs/taro'
import React from 'react'
import { View } from '@tarojs/components'

let Circle;
if (process.env.TARO_ENV === 'rn') {
  Circle = require('react-native-animated-spinkit').Circle;
}

interface AtLoadingProps {
  size?: string | number
  color?: string | number
}

export default class AtLoading extends React.Component<AtLoadingProps> {
  public static defaultProps: AtLoadingProps
  public static propTypes: InferProps<AtLoadingProps>

  public render(): JSX.Element {
    const { color, size } = this.props;

    if (process.env.TARO_ENV === 'rn') {
      return (
        <Circle size={Taro.pxTransform(size)} color={color} />
      );
    }

    const loadingSize = typeof size === 'string' ? size : String(size)

    const sizeStyle: any = {};
    if (size) {
      sizeStyle.width = Taro.pxTransform(parseInt(loadingSize));
      sizeStyle.height = Taro.pxTransform(parseInt(loadingSize));
    }

    const colorStyle = {
      border: color ? `1px solid ${color}` : '',
      borderColor: color ? `${color} transparent transparent transparent` : ''
    }
    const ringStyle = Object.assign({}, colorStyle, sizeStyle)

    return (
      <View className='at-loading' style={sizeStyle}>
        <View className='at-loading__ring' style={ringStyle} />
        <View className='at-loading__ring' style={ringStyle} />
        <View className='at-loading__ring' style={ringStyle} />
      </View>
    )
  }
}

AtLoading.defaultProps = {
  size: 0,
  color: ''
}

AtLoading.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
