import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react';
import Taro from '@tarojs/taro';
import { Text, View } from '@tarojs/components'
import { AtProgressProps } from '../../../types/progress'
import '../../style/components/progress.scss';

export default class AtProgress extends React.Component<AtProgressProps> {
  public static propTypes: InferProps<AtProgressProps>

  public render(): JSX.Element {
    const { color } = this.props
    let { percent } = this.props
    const { strokeWidth, status, isHidePercent } = this.props

    if (typeof percent !== 'number') {
      percent = 0
    }

    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    const rootClass = classNames(
      'at-progress',
      {
        [`at-progress--${status}`]: !!status
      },
      this.props.className
    )
    const iconClass = classNames('at-icon', {
      'at-icon-close-circle': status === 'error',
      'at-icon-check-circle': status === 'success'
    })

    const progressStyle: React.CSSProperties = {}
    if (percent) {
      progressStyle.width = `${+percent}%`;
    }
    if (strokeWidth) {
      progressStyle.height = Taro.pxTransform(+strokeWidth);
      progressStyle.borderRadius = Taro.pxTransform(strokeWidth / 2);
    }
    if (color) {
      progressStyle.backgroundColor = color;
    }

    return (
      <View className={rootClass}>
        <View className='at-progress__outer'>
          <View className='at-progress__outer-inner'>
            <View
              className={classNames({
                'at-progress__outer-inner-background': true,
                [`at-progress__outer-inner-background--${status}`]: status,
              })}
              style={progressStyle}
            />
          </View>
        </View>

        {!isHidePercent && (
          <View className='at-progress__content'>
            {!status || status === 'progress' ? (
              `${percent}%`
            ) : (
              <Text className={iconClass} />
            )}
          </View>
        )}
      </View>
    )
  }
}

AtProgress.propTypes = {
  color: PropTypes.string,
  status: PropTypes.string,
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  isHidePercent: PropTypes.bool
}
