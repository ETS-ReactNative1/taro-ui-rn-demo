import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtActionSheetFooterProps } from '../../../../types/action-sheet'
import '../../../style/components/action-sheet.scss'

export default class AtActionSheetFooter extends React.Component<
  AtActionSheetFooterProps
> {
  public static defaultProps: AtActionSheetFooterProps
  public static propTypes: InferProps<AtActionSheetFooterProps>

  private handleClick = (...args: any[]): void => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(...args)
    }
  }

  public render(): JSX.Element {
    const rootClass = classNames(
      'at-action-sheet__footer',
      this.props.className
    )

    return (
      <View onClick={this.handleClick} className={rootClass}>
        {React.isValidElement(this.props.children)
          ? this.props.children
          : <Text className='at-action-sheet__footer__text'>{this.props.children}</Text>}
      </View>
    )
  }
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
