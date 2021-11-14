/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconLeftSquareFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM624 380.9c0 10.2-4.9 19.9-13.2 25.9L465.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178c-4.4-3.2-4.4-9.7 0-12.9l246-178c5.3-3.8 12.7 0 12.7 6.5v46.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLeftSquareFill.defaultProps = {
  size: 18,
};

IconLeftSquareFill = React.memo ? React.memo(IconLeftSquareFill) : IconLeftSquareFill;

export default IconLeftSquareFill;
