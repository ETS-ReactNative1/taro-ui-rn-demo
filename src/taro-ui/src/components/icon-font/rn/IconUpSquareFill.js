/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconUpSquareFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM690 624h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 465.4 406.8 610.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3 0.1 12.7-6.4 12.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconUpSquareFill.defaultProps = {
  size: 36,
};

IconUpSquareFill = React.memo ? React.memo(IconUpSquareFill) : IconUpSquareFill;

export default IconUpSquareFill;
