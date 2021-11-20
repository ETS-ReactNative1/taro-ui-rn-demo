import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { AtTimelineProps } from '../../../types/timeline'
import '../../style/components/timeline.scss';
import IconFont from '../icon-font'

export default class AtTimeline extends React.Component<AtTimelineProps> {
  public static defaultProps: AtTimelineProps
  public static propTypes: InferProps<AtTimelineProps>

  public render(): JSX.Element {
    const { pending, items, customStyle } = this.props

    const rootClassName = ['at-timeline']
    if (pending) rootClassName.push('at-timeline--pending')

    const rootClassObject = {
      'at-timeline--pending': pending
    }

    const itemElems = items.map((item, index) => {
      const { title = '', color, icon, content = [] } = item
      const isLast = index === items.length - 1;

      const itemRootClassName = ['at-timeline-item']
      if (color) itemRootClassName.push(`at-timeline-item--${color}`)

      const dotClass: string[] = []
      if (icon) {
        dotClass.push('at-timeline-item__icon')
        dotClass.push(`at-timeline-item__icon--${color}`)
        dotClass.push(`at-timeline-item__icon--${Taro.getEnv()}`)
        dotClass.push(`at-timeline-item__icon--${Taro.getEnv()}--${color}`)
      } else {
        dotClass.push('at-timeline-item__dot');
        dotClass.push(`at-timeline-item__dot--${color}`);
        dotClass.push(`at-timeline-item__dot--${Taro.getEnv()}`);
        dotClass.push(`at-timeline-item__dot--${Taro.getEnv()}--${color}`);
      }

      return (
        <View
          className={classNames(itemRootClassName)}
          key={`at-timeline-item-${index}`}
        >
          <View
            className={classNames('at-timeline-item__tail', `at-timeline-item__tail--${Taro.getEnv()}`, {
              'at-timeline-item__tail--last': isLast,
              [`at-timeline-item__tail--${Taro.getEnv()}--last`]: isLast,
            })}
          />
          <View className={classNames(dotClass)}>
            {!!icon && <IconFont name={icon} size={30} color='#78A4F4' />}
          </View>
          <View className='at-timeline-item__content'>
            <Text className='at-timeline-item__content-item'>{title}</Text>
            {content.map((sub, subIndex) => (
              <Text
                className={classNames([
                  'at-timeline-item__content-item',
                  'at-timeline-item__content--sub',
                ])}
                key={subIndex}
              >
                {sub}
              </Text>
            ))}
          </View>
        </View>
      )
    })
    return (
      <View
        className={classNames(
          rootClassName,
          rootClassObject,
          this.props.className
        )}
        style={customStyle}
      >
        {itemElems}
      </View>
    )
  }
}

AtTimeline.defaultProps = {
  pending: false,
  items: [],
  customStyle: {}
}

AtTimeline.propTypes = {
  pending: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}
