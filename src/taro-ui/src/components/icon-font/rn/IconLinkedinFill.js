/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconLinkedinFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8z m-59.3-434c-38 0-68.8-30.8-68.8-68.8s30.8-68.8 68.8-68.8c37.9 0 68.8 30.8 68.8 68.8-0.1 38-30.9 68.8-68.8 68.8z m503.7 434H675.1V608c0-44.3-0.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLinkedinFill.defaultProps = {
  size: 18,
};

IconLinkedinFill = React.memo ? React.memo(IconLinkedinFill) : IconLinkedinFill;

export default IconLinkedinFill;