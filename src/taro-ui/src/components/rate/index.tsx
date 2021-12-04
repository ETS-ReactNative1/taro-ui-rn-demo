import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtRateProps } from '../../../types/rate'
import '../../style/components/rate.scss'
import IconFont from '../icon-font'

export default class AtRate extends React.Component<AtRateProps> {
  public static defaultProps: AtRateProps
  public static propTypes: InferProps<AtRateProps>

  private handleClick(event: CommonEvent): void {
    this.props.onChange && this.props.onChange(event)
  }

  public render(): JSX.Element {
    const {
      customStyle,
      className,
      value = 0,
      max = 5,
      size,
      margin = 5
    } = this.props

    const iconStyle = {
      marginRight: Taro.pxTransform(margin)
    }
    const starIconStyle: React.CSSProperties = {}
    if (size) {
      starIconStyle.fontSize = Taro.pxTransform(size);
    }

    // 生成星星颜色 className 数组，方便在jsx中直接map
    const classNameArr: string[] = []
    const icons: string[] = []
    const floorValue = Math.floor(value)
    const ceilValue = Math.ceil(value)
    for (let i = 0; i < max; i++) {
      if (floorValue > i) {
        icons.push('starfull');
      } else if (ceilValue - 1 === i) {
        icons.push('starhalf');
      } else {
        icons.push('starempty');
      }
    }

    return (
      <View className={classNames('at-rate', className)} style={customStyle}>
        {icons.map((item, i) => {
          return (
            <View
              key={`at-rate-star-${i}`}
              className={classNames('at-rate__star', `at-rate__star-${i}`)}
              style={iconStyle}
              onClick={this.handleClick.bind(this, i + 1)}
            >
              <IconFont name={item} size={36} color='#FFCA3E' />
            </View>
          );
        })}
      </View>
    )
  }
}

AtRate.defaultProps = {
  customStyle: '',
  className: '',
  size: 0,
  value: 0,
  max: 5,
  margin: 5
}

AtRate.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.number,
  max: PropTypes.number,
  margin: PropTypes.number,
  onChange: PropTypes.func
}
