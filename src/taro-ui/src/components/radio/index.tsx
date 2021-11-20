import classNames from 'classnames'
import Taro from '@tarojs/taro'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtRadioProps, RadioOption } from '../../../types/radio'
import '../../style/components/radio.scss';
import IconFont from '../icon-font'

export default class AtRadio extends React.Component<AtRadioProps<any>> {
  public static defaultProps: AtRadioProps<any>
  public static propTypes: InferProps<AtRadioProps<any>>

  private handleClick(option: RadioOption<any>, event: CommonEvent): void {
    if (option.disabled) return
    this.props.onClick(option.value, event)
  }

  public render(): JSX.Element {
    const { customStyle, className, options, value } = this.props

    return (
      <View className={classNames(['at-radio', `at-radio-${Taro.getEnv()}`], className)} style={customStyle}>
        {options.map((option, i) => (
          <View
            key={option.value}
            onClick={this.handleClick.bind(this, option)}
            className={classNames({
              'at-radio__option': true,
              'at-radio__option--disabled': option.disabled
            })}
          >
            <View
              className={classNames([
                'at-radio__option-wrap',
                `at-radio__option-wrap-${i}`,
                `at-radio__option-wrap-${Taro.getEnv()}`,
                `at-radio__option-wrap-${Taro.getEnv()}-${i}`,
              ], {
                'at-radio__option-wrap--disabled': option.disabled,
              })}
            >
              <View
                className={classNames(['at-radio__option-container'], {
                  'at-radio__option-container--disabled': option.disabled,
                })}
              >
                <Text className='at-radio__title'>{option.label}</Text>
                {value === option.value && (
                  <IconFont name='check' size={40} />
                )}
              </View>
              {option.desc && (
                <Text
                  className={classNames(['at-radio__desc'], {
                    'at-radio__desc--disabled': option.disabled,
                  })}
                >
                  {option.desc}
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>
    )
  }
}

AtRadio.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  options: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {}
}

AtRadio.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func
}
