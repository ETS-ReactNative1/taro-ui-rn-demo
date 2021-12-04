/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShoppingFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32z m-208 0H400v-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShoppingFill.defaultProps = {
  size: 36,
};

IconShoppingFill = React.memo ? React.memo(IconShoppingFill) : IconShoppingFill;

export default IconShoppingFill;
