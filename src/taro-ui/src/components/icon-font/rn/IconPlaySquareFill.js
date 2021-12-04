/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconPlaySquareFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3 0.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7c5.7 4.5 5.7 13.1 0 17.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPlaySquareFill.defaultProps = {
  size: 36,
};

IconPlaySquareFill = React.memo ? React.memo(IconPlaySquareFill) : IconPlaySquareFill;

export default IconPlaySquareFill;
