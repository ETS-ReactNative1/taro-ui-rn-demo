import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheetHeaderProps } from '../../../../types/action-sheet'
import '../../../style/components/action-sheet.scss'

export default class AtActionSheetHeader extends React.Component<
  AtActionSheetHeaderProps
> {
  public render(): JSX.Element {
    const rootClass = classNames(
      'at-action-sheet__header',
      this.props.className
    )

    return <View className={rootClass}>{this.props.children}</View>
  }
}
