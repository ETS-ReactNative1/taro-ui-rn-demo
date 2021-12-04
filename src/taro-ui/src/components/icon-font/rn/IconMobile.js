/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMobile = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64z m-8 824H288V134h448v752z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 784m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconMobile.defaultProps = {
  size: 36,
};

IconMobile = React.memo ? React.memo(IconMobile) : IconMobile;

export default IconMobile;
