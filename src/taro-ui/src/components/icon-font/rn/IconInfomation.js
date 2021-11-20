/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconInfomation = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 224m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M544 392h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconInfomation.defaultProps = {
  size: 18,
};

IconInfomation = React.memo ? React.memo(IconInfomation) : IconInfomation;

export default IconInfomation;
