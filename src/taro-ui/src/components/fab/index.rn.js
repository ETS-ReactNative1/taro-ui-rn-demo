import classNames from 'classnames'
import Taro from "@tarojs/taro";
import isFunction from 'lodash/isFunction'
import {useEffect, useState} from 'react'
import { View } from '@tarojs/components'
import RootSiblings from 'react-native-root-siblings';
import noop from 'lodash/noop';
import '../../style/components/fab.scss';

function AtFab({ size = 'normal', className, children, onClick = noop }) {
  const [sibling, setSibling] = useState(null);

  useEffect(() => {
    sibling && sibling.destroy();

    const rootClass = classNames('at-fab', `at-fab__${Taro.getEnv()}`, className, {
      [`at-fab--${size}`]: size,
    })

    console.log('AtFab RN', size);
    setSibling(new RootSiblings(
      <View
        className={rootClass}
        onClick={(e) => {
          isFunction(onClick) && onClick(e);
        }}
      >
        {children}
      </View>
    ));

    return () => {
      sibling && sibling.destroy();
    };
  }, [children, className, onClick, size]);

  return null;
}

export default AtFab;
