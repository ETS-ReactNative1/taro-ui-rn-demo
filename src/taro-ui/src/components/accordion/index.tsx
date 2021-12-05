import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtAccordionProps, AtAccordionState } from '../../../types/accordion'
import { delayQuerySelector } from '../../common/utils'
import IconFont from "../icon-font";
import AtIcon from "../icon";
import '../../style/components/accordion.scss'

export default class AtAccordion extends React.Component<
  AtAccordionProps,
  AtAccordionState
  > {
  private isCompleted: boolean
  private startOpen: boolean

  public static defaultProps: AtAccordionProps
  public static propTypes: InferProps<AtAccordionProps>

  public constructor(props: AtAccordionProps) {
    super(props)
    this.isCompleted = true
    this.startOpen = false
    this.state = {
      wrapperHeight: 0
    }
  }

  private handleClick = (event: CommonEvent): void => {
    const { open } = this.props
    if (!this.isCompleted) return

    this.props.onClick && this.props.onClick(!open, event)
  }

  private toggleWithAnimation(): void {
    const { open, isAnimation } = this.props
    if (!this.isCompleted || !isAnimation) return

    this.isCompleted = false
    delayQuerySelector('.at-accordion__body', 0).then(rect => {
      const height = parseInt(rect[0].height.toString())
      const startHeight = open ? height : 0
      const endHeight = open ? 0 : height
      this.startOpen = false
      this.setState(
        {
          wrapperHeight: startHeight
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                wrapperHeight: endHeight
              },
              () => {
                setTimeout(() => {
                  this.isCompleted = true
                  this.setState({})
                }, 700)
              }
            )
          }, 100)
        }
      )
    })
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtAccordionProps): void {
    if (nextProps.open !== this.props.open) {
      this.startOpen = !!nextProps.open && !!nextProps.isAnimation
      this.toggleWithAnimation()
    }
  }

  public render(): JSX.Element {
    const {
      customStyle,
      className,
      title,
      icon,
      hasBorder,
      open,
      note
    } = this.props
    const { wrapperHeight } = this.state

    const rootCls = classNames('at-accordion', className)
    const prefixClass = (icon && icon.prefixClass) || 'at-icon'
    const iconCls = classNames({
      [prefixClass]: true,
      [`${prefixClass}-${icon && icon.value}`]: icon && icon.value,
      'at-accordion__icon': true
    })
    const headerCls = classNames('at-accordion__header', {
      'at-accordion__header--noborder': !hasBorder
    })
    const contentCls = classNames('at-accordion__content', {
      'at-accordion__content--inactive':
        (!open && this.isCompleted) || this.startOpen
    })
    const contentStyle = { height: `${wrapperHeight}px` }

    if (this.isCompleted) {
      contentStyle.height = ''
    }

    return (
      <View className={rootCls} style={customStyle}>
        <View className={headerCls} onClick={this.handleClick}>
          {!!icon && !!icon.value && (
            <View className='at-accordion__icon'>
              <AtIcon {...icon} />
            </View>
          )}
          <View className='at-accordion__info'>
            <Text className='at-accordion__info__title'>{title}</Text>
            {!!note && (
              <Text className='at-accordion__info__note'>{note}</Text>
            )}
          </View>
          <IconFont name={open ? 'up' : 'down'} color='#999' size={42} />
        </View>
        <View style={contentStyle} className={contentCls}>
          <View className='at-accordion__body'>{this.props.children}</View>
        </View>
      </View>
    )
  }
}

AtAccordion.defaultProps = {
  open: false,
  customStyle: '',
  className: '',
  title: '',
  note: '',
  icon: { value: '' },
  hasBorder: true,
  isAnimation: true
}

AtAccordion.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  open: PropTypes.bool,
  isAnimation: PropTypes.bool,
  title: PropTypes.string,
  note: PropTypes.string,
  icon: PropTypes.object,
  hasBorder: PropTypes.bool,
  onClick: PropTypes.func
}
