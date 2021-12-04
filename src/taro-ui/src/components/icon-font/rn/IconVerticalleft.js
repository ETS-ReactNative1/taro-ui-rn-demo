/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconVerticalleft = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zM254 164v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512 265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512 267.1 157.9c-5.2-4.4-13.1-0.7-13.1 6.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconVerticalleft.defaultProps = {
  size: 36,
};

IconVerticalleft = React.memo ? React.memo(IconVerticalleft) : IconVerticalleft;

export default IconVerticalleft;
