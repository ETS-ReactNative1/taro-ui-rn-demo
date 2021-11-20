/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSmallDash = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M112 476h72v72h-72zM294 476h72v72h-72zM658 476h72v72h-72zM840 476h72v72h-72zM476 476h72v72h-72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSmallDash.defaultProps = {
  size: 18,
};

IconSmallDash = React.memo ? React.memo(IconSmallDash) : IconSmallDash;

export default IconSmallDash;
