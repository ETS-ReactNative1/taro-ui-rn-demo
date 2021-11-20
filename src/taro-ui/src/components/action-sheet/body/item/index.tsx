import React from 'react';
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View, Text } from '@tarojs/components'
import { AtActionSheetItemProps } from '../../../../../types/action-sheet'
import '../../../../style/components/action-sheet.scss'

export default class AtActionSheetItem extends React.Component<
  AtActionSheetItemProps
> {
  public static defaultProps: AtActionSheetItemProps
  public static propTypes: InferProps<AtActionSheetItemProps>

  private handleClick = (args: any): void => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(args)
    }
  }

  public render(): JSX.Element {
    const rootClass = classNames('at-action-sheet__item', this.props.className)

    return (
      <View className={rootClass} onClick={this.handleClick}>
        {React.isValidElement(this.props.children)
          ? this.props.children
          : <Text numberOfLines={1} className='at-action-sheet__item__text'>{this.props.children}</Text>}
      </View>
    )
  }
}

AtActionSheetItem.propTypes = {
  onClick: PropTypes.func
}
