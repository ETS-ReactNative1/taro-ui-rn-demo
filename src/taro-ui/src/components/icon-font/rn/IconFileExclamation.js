/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFileExclamation = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 744m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M488 640h48c4.4 0 8-3.6 8-8V448c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconFileExclamation.defaultProps = {
  size: 36,
};

IconFileExclamation = React.memo ? React.memo(IconFileExclamation) : IconFileExclamation;

export default IconFileExclamation;
