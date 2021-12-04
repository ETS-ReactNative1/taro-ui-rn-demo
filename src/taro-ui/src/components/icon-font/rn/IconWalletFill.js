/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconWalletFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-32 464H528V448h320v128z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M620 512m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconWalletFill.defaultProps = {
  size: 36,
};

IconWalletFill = React.memo ? React.memo(IconWalletFill) : IconWalletFill;

export default IconWalletFill;
