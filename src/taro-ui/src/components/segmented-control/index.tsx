import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtSegmentedControlProps } from '../../../types/segmented-control'
import { mergeStyle } from '../../common/utils'
import '../../style/components/segmented-control.scss'

export default class AtSegmentedControl extends React.Component<
  AtSegmentedControlProps
> {
  public static defaultProps: AtSegmentedControlProps
  public static propTypes: InferProps<AtSegmentedControlProps>

  private handleClick(index: number, event: CommonEvent): void {
    if (this.props.disabled) return
    this.props.onClick(index, event)
  }

  public render(): JSX.Element {
    const {
      customStyle = {},
      className,
      disabled,
      values,
      selectedColor,
      current,
      color,
      fontSize = 28
    } = this.props

    const rootStyle: React.CSSProperties = {
    }
    const itemStyle: React.CSSProperties = {
      fontSize: Taro.pxTransform(fontSize),
    }
    const textStyle: React.CSSProperties = {};
    const selectedItemStyle: React.CSSProperties = {
      fontSize: Taro.pxTransform(fontSize),
    }

    if (color && color.length > 0) {
      itemStyle.backgroundColor = color;
      selectedItemStyle.color = color;
    }
    if (selectedColor && selectedColor?.length > 0) {
      rootStyle.borderTopColor = selectedColor;
      rootStyle.borderBottomColor = selectedColor;
      rootStyle.borderLeftColor = selectedColor;
      rootStyle.borderRightColor = selectedColor;

      itemStyle.color = selectedColor;
      itemStyle.borderTopColor = selectedColor;
      itemStyle.borderBottomColor = selectedColor;
      itemStyle.borderLeftColor = selectedColor;
      itemStyle.borderRightColor = selectedColor;

      selectedItemStyle.borderTopColor = selectedColor;
      selectedItemStyle.borderBottomColor = selectedColor;
      selectedItemStyle.borderLeftColor = selectedColor;
      selectedItemStyle.borderRightColor = selectedColor;
      selectedItemStyle.backgroundColor = selectedColor;

      textStyle.color = selectedColor;
    }

    const rootCls = classNames(
      'at-segmented-control',
      {
        'at-segmented-control--disabled': disabled
      },
      className
    )

    return (
      <View
        className={rootCls}
        style={{
          ...rootStyle,
          ...customStyle,
        }}
      >
        {values.map((value, i) => {
          const extraTextStyle: React.CSSProperties = {};
          if (current === i) {
            extraTextStyle.color = '#fff';
          }
          return (
            <View
              className={classNames('at-segmented-control__item', {
                'at-segmented-control__item--active': current === i
              })}
              style={current === i ? selectedItemStyle : itemStyle}
              key={`${i}-${value}`}
              onClick={this.handleClick.bind(this, i)}
            >
              <Text
                className={classNames('at-segmented-control__item__text', {
                  'at-segmented-control__item__text--active': current === i
                })}
                style={{
                  ...textStyle,
                  ...extraTextStyle,
                }}
              >
                {value}
              </Text>
            </View>
          );
        })}
      </View>
    )
  }
}

AtSegmentedControl.defaultProps = {
  customStyle: {},
  className: '',
  current: 0,
  color: '',
  fontSize: 28,
  disabled: false,
  selectedColor: '',
  values: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {}
}

AtSegmentedControl.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  current: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  values: PropTypes.array,
  onClick: PropTypes.func
}
