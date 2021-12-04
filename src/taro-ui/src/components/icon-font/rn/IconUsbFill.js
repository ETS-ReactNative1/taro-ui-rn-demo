/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconUsbFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M408 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M760 432V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116z m-72 0H336V184h352v248z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M568 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconUsbFill.defaultProps = {
  size: 36,
};

IconUsbFill = React.memo ? React.memo(IconUsbFill) : IconUsbFill;

export default IconUsbFill;
