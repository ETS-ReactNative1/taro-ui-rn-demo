/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconStepForward = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M676.409 528.95l-383.21 301.024C278.95 841.166 258 831.078 258 813.024v-602.05c0-18.05 20.95-28.14 35.199-16.948l383.21 301.023c11.01 8.65 11.01 25.252 0 33.901M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconStepForward.defaultProps = {
  size: 36,
};

IconStepForward = React.memo ? React.memo(IconStepForward) : IconStepForward;

export default IconStepForward;
