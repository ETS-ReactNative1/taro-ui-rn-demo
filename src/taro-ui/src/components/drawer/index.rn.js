import {View} from "@tarojs/components";
import Modal from "react-native-modal";
import Taro from '@tarojs/taro';
import noop from 'lodash/noop';
import classNames from 'classnames'
import AtList from "../list";
import AtListItem from "../list/item";
import '../../style/components/drawer.scss'

function AtDrawer({
  show = false,
  mask = true,
  right = false,
  items = [],
  onItemClick = noop,
  onClose = noop,
  children,
}) {
  const listStyle = {};

  return (
    <Modal
      animationIn={right ? 'fadeInRight' : 'fadeInLeft'}
      animationOut={right ? 'fadeOutRight' : 'fadeOutLeft'}
      isVisible={show}
      hasBackdrop={mask}
      onModalHide={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={{
        margin: 0,
      }}
    >
      <View
        className={classNames('at-drawer__content', `at-drawer__content-${Taro.getEnv()}`, {
          'at-drawer__content--right': right,
          [`at-drawer__content-${Taro.getEnv()}--right`]: right,
        })}
        style={listStyle}
      >
        {!!items && items.length ? (
          <AtList>
            {items.map((name, index) => (
              <AtListItem
                key={`${name}-${index}`}
                data-index={index}
                onClick={() => {
                  onClose();
                  onItemClick(index, name);
                }}
                title={name}
                arrow='right'
              />
            ))}
          </AtList>
        ) : children}
      </View>
    </Modal>
  );
}

export default AtDrawer;
