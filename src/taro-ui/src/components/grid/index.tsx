import classNames from 'classnames'
import _chunk from 'lodash/chunk'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { Image, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtGridItem, AtGridProps } from '../../../types/grid'
import { mergeStyle } from '../../common/utils'
import '../../style/components/grid.scss';

export default class AtGrid extends React.Component<AtGridProps> {
  public static defaultProps: AtGridProps
  public static propTypes: InferProps<AtGridProps>

  private handleClick = (
    item: AtGridItem,
    index: number,
    row: number,
    event: CommonEvent
  ): void => {
    const { onClick, columnNum = 3 } = this.props
    if (typeof onClick === 'function') {
      const clickIndex = row * columnNum + index
      onClick(item, clickIndex, event)
    }
  }

  public render(): JSX.Element | null {
    const { data, mode, columnNum = 3, hasBorder } = this.props

    if (Array.isArray(data) && data.length === 0) {
      return null
    }

    const gridGroup = _chunk(data, columnNum)

    return (
      <View className={classNames('at-grid', this.props.className)}>
        {gridGroup.map((item, i) => (
          <View
            className={classNames({
              'at-grid__flex--border': hasBorder,
            }, ['at-grid__flex', `at-grid__flex-${i}`])}
            key={`at-grid-group-${i}`}
          >
            {item.map((childItem, index) => (
              <View
                key={`at-grid__item-${index}`}
                className={classNames(['at-grid__flex-item', `at-grid__flex-item-${index}`, 'at-grid__item', `at-grid__item--${mode}`], {
                  'at-grid__item--no-border': !hasBorder,
                  'at-grid__item--last': index === columnNum - 1
                })}
                onClick={this.handleClick.bind(this, childItem, index, i)}
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: `${100 / columnNum}%`,
                }}
              >
                <View
                  className={classNames([
                    'at-grid__item__content',
                    `at-grid__item--${mode}__content`,
                  ])}
                >
                  <View
                    className={classNames([
                      'at-grid__item__content-inner',
                      `at-grid__item--${mode}__content-inner`,
                    ])}
                  >
                    <View className='content-inner__icon'>
                      {childItem.image && (
                        <Image
                          className={classNames([
                            'at-grid__item__content-inner__img',
                            `at-grid__item--${mode}__content-inner__img`,
                          ])}
                          src={childItem.image}
                          mode='scaleToFill'
                        />
                      )}
                      {childItem.iconInfo && !childItem.image && (
                        <Text
                          className={classNames(
                            childItem.iconInfo.prefixClass || 'at-icon',
                            {
                              [`${
                                childItem.iconInfo.prefixClass || 'at-icon'
                              }-${childItem.iconInfo.value}`]: childItem
                                .iconInfo.value
                            },
                            childItem.iconInfo.className
                          )}
                          style={mergeStyle(
                            {
                              color: childItem.iconInfo.color,
                              fontSize: Taro.pxTransform(Number(childItem.iconInfo.size || 24))
                            },
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            childItem.iconInfo!.customStyle!
                          )}
                        />
                      )}
                    </View>
                    <Text
                      className={classNames([
                        'at-grid__item__content-inner__text',
                        `at-grid__item--${mode}__content-inner__text`,
                      ])}
                    >
                      {childItem.value}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    )
  }
}

AtGrid.defaultProps = {
  data: [],
  columnNum: 3,
  mode: 'square',
  hasBorder: true
}

AtGrid.propTypes = {
  mode: PropTypes.string,
  onClick: PropTypes.func,
  hasBorder: PropTypes.bool,
  columnNum: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      value: PropTypes.string,
      iconInfo: PropTypes.shape({
        size: PropTypes.number,
        value: PropTypes.string,
        color: PropTypes.string,
        prefixClass: PropTypes.string,
        customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
      })
    })
  )
}
