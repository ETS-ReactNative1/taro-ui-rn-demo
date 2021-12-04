/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconLayout = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-696 72h136v656H184V184z m656 656H384V384h456v456zM384 320V184h456v136H384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLayout.defaultProps = {
  size: 36,
};

IconLayout = React.memo ? React.memo(IconLayout) : IconLayout;

export default IconLayout;
