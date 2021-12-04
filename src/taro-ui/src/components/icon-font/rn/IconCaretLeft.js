/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCaretLeft = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCaretLeft.defaultProps = {
  size: 36,
};

IconCaretLeft = React.memo ? React.memo(IconCaretLeft) : IconCaretLeft;

export default IconCaretLeft;
