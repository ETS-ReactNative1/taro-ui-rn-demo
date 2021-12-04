/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBookFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM668 345.9L621.5 312 572 347.4V124h96v221.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBookFill.defaultProps = {
  size: 36,
};

IconBookFill = React.memo ? React.memo(IconBookFill) : IconBookFill;

export default IconBookFill;
