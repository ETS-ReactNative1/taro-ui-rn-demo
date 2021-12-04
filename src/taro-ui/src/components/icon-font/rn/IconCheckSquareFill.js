/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCheckSquareFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM695.5 365.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L308.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H689c6.5 0 10.3 7.4 6.5 12.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCheckSquareFill.defaultProps = {
  size: 36,
};

IconCheckSquareFill = React.memo ? React.memo(IconCheckSquareFill) : IconCheckSquareFill;

export default IconCheckSquareFill;
