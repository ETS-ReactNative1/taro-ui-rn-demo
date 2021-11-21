import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { AtCheckboxProps } from '../../../types/checkbox'
import '../../style/components/checkbox.scss';
import IconFont from '../icon-font'

export default class AtCheckbox extends React.Component<AtCheckboxProps<any>> {
  public static defaultProps: AtCheckboxProps<any>
  public static propTypes: InferProps<AtCheckboxProps<any>>

  private handleClick(idx: number): void {
    const { selectedList, options } = this.props
    const option = options[idx]
    const { disabled, value } = option
    if (disabled) return

    const selectedSet = new Set(selectedList)
    if (!selectedSet.has(value)) {
      selectedSet.add(value)
    } else {
      selectedSet.delete(value)
    }
    this.props.onChange([...selectedSet])
  }

  public render(): JSX.Element {
    const { customStyle, className, options, selectedList } = this.props

    const rootCls = classNames(['at-checkbox', `at-checkbox-${Taro.getEnv()}`], className)

    return (
      <View className={rootCls} style={customStyle}>
        {options.map((option, idx) => {
          const { value, disabled, label, desc } = option;
          const selected = selectedList.includes(value);
          const optionCls = classNames(['at-checkbox__option', `at-checkbox__option-${idx}`], {
            'at-checkbox__option--disabled': disabled,
            'at-checkbox__option--selected': selected,
          })

          return (
            <View
              className={optionCls}
              key={value}
              onClick={this.handleClick.bind(this, idx)}
            >
              <View
                className={classNames([
                  'at-checkbox__option-wrap',
                  `at-checkbox__option-wrap-${idx}`,
                  `at-checkbox__option-wrap-${Taro.getEnv()}`,
                  `at-checkbox__option-wrap-${Taro.getEnv()}-${idx}`,
                ])}
              >
                <View className='at-checkbox__option-cnt'>
                  <View className='at-checkbox__icon-cnt'>
                    <IconFont
                      name={selected ? 'check-circle-fill' : 'check-circle'}
                      size={40}
                    />
                  </View>
                  <Text className='at-checkbox__title'>{label}</Text>
                </View>
                {desc && <Text className='at-checkbox__desc'>{desc}</Text>}
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

AtCheckbox.defaultProps = {
  customStyle: {},
  className: '',
  options: [],
  selectedList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (): void => {}
}

AtCheckbox.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  options: PropTypes.array,
  selectedList: PropTypes.array,
  onChange: PropTypes.func
}
