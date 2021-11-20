import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import isFunction from 'lodash/isFunction'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtFabProps } from '../../../types/fab'
import '../../style/components/fab.scss';

export default class AtFab extends React.Component<AtFabProps> {
  public static defaultProps: AtFabProps
  public static propTypes: InferProps<AtFabProps>

  private onClick(e: CommonEvent): void {
    if (isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  public render(): JSX.Element {
    const { size, className, children } = this.props

    const rootClass = classNames('at-fab', `at-fab__${Taro.getEnv()}`, className, {
      [`at-fab--${size}`]: size,
    })

    return (
      <View className={rootClass} onClick={this.onClick.bind(this)}>
        {children}
      </View>
    )
  }
}

AtFab.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  onClick: PropTypes.func
}

AtFab.defaultProps = {
  size: 'normal'
}
