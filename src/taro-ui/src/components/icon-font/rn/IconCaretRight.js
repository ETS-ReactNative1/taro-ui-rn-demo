/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCaretRight = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCaretRight.defaultProps = {
  size: 36,
};

IconCaretRight = React.memo ? React.memo(IconCaretRight) : IconCaretRight;

export default IconCaretRight;
