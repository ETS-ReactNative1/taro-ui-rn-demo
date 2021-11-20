import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtStepsProps } from '../../../types/steps'
import IconFont from '../icon-font'
import '../../style/components/steps.scss';

export default class AtSteps extends React.Component<AtStepsProps> {
  public static defaultProps: AtStepsProps
  public static propTypes: InferProps<AtStepsProps>

  private handleClick(current: number, event: CommonEvent): void {
    this.props.onChange(current, event)
  }

  public render(): JSX.Element {
    const { customStyle, className, items, current } = this.props

    return (
      <View className={classNames('at-steps', className)} style={customStyle}>
        {!!items &&
          items.map((item, i) => {
            let classList: any = {
              'at-steps__circular': true,
              'at-steps__circular--active': i === current,
              'at-steps__circular--inactive': i !== current,
            };

            if (item.status) {
              if (item.status === 'success') {
                item.icon = {
                  value: 'check-circle',
                  activeColor: '#13CE66',
                  inactiveColor: '#13CE66',
                  size: 58
                };
                classList = {
                  'at-steps__single-icon': true,
                };
              }
              if (item.status === 'error') {
                item.icon = {
                  value: 'close-circle',
                  activeColor: '#FF4949',
                  inactiveColor: '#FF4949',
                  size: 58
                };
                classList = {
                  'at-steps__single-icon': true,
                };
              }
              delete item.status;
            }

            return (
              <View
                key={item.title}
                className={classNames({
                  'at-steps__item': true,
                  'at-steps__item--active': i === current,
                  'at-steps__item--inactive': i !== current
                })}
                onClick={this.handleClick.bind(this, i)}
              >
                <View className='at-steps__circular-wrap'>
                  {i !== 0 && <View className='at-steps__left-line' />}
                  <View
                    className={classNames(classList)}
                  >
                    {item.icon ? (
                      <IconFont
                        name={item.icon.value}
                        size={item.icon.size}
                        color={i === current ? item.icon.activeColor : item.icon.inactiveColor}
                      />
                    ) : (
                      <Text
                        className={classNames({
                          'at-steps__num': true,
                          'at-steps__circular--active--text': i === current,
                          'at-steps__circular--inactive--text': i !== current,
                        })}
                      >
                        {i + 1}
                      </Text>
                    )}
                  </View>
                  {i !== items.length - 1 && (
                    <View className='at-steps__right-line' />
                  )}
                </View>
                <View className='at-steps__title'>
                  <Text className='at-steps__title__text' numberOfLines={1}>{item.title}</Text>
                </View>
                <View className='at-steps__desc'>
                  <Text className='at-steps__desc__text' numberOfLines={2}>{item.desc}</Text>
                </View>
              </View>
            );
          })}
      </View>
    )
  }
}

AtSteps.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  items: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (): void => {}
}

AtSteps.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  current: PropTypes.number,
  items: PropTypes.array,
  onChange: PropTypes.func
}
