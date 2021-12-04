/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCarryoutFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM694.5 432.7L481.9 725.4c-6.4 8.8-19.6 8.8-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5 0.1 10.3 7.5 6.5 12.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCarryoutFill.defaultProps = {
  size: 36,
};

IconCarryoutFill = React.memo ? React.memo(IconCarryoutFill) : IconCarryoutFill;

export default IconCarryoutFill;
