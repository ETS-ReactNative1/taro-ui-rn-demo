import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtSwipeActionOptionsProps } from '../../../../types/swipe-action'
import '../../../style/components/swipe-action.scss'

export default class AtSwipeActionOptions extends React.Component<
  AtSwipeActionOptionsProps
> {
  public render(): JSX.Element {
    const rootClass = classNames(
      'at-swipe-action__options',
      this.props.className
    )

    return (
      <View
        id={`swipeActionOptions-${this.props.componentId}`}
        className={rootClass}
        style={this.props.customStyle}
      >
        {this.props.children}
      </View>
    )
  }
}
