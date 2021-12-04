import Collapsible from 'react-native-collapsible';
import {Text, View} from "@tarojs/components";
import classNames from "classnames";
import noop from "lodash/noop";
import Taro from "@tarojs/taro";
import IconFont from "../icon-font";
import '../../style/components/accordion.scss'

function AtAccordion({
                       open = false,
                       title = '',
                       note = '',
                       children,
                       onClick = noop,
                       customStyle = {},
  icon = { value: '' },
                       hasBorder = true,
                       isAnimation = true,
                       className = ''
}) {

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

  const iconStyle = {}
  if (icon && icon.color) {
    iconStyle.color = icon.color;
  }

  return (
    <View className={rootCls} style={customStyle}>
      <View
        className={headerCls}
        onClick={() => {
          onClick(!open);
        }}
      >
        {!!icon && !!icon.value && (
          <View className='at-accordion__icon'>
            <IconFont
              name={icon.value}
              color={icon.color ? icon.color : '#333'}
              size={icon.size ? icon.size : 48}
            />
          </View>
        )}
        <View className='at-accordion__info'>
          <Text className='at-accordion__info__title'>{title}</Text>
          {!!note && (
            <Text className='at-accordion__info__note'>{note}</Text>
          )}
        </View>
        <IconFont name={open ? 'down' : 'up'} color='#999' size={42} />
      </View>
      <Collapsible
        collapsed={!open}
        style={customStyle}
      >
        {children}
      </Collapsible>
    </View>
  );
}

export default AtAccordion;
