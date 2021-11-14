/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconStopFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m234.8 736.5L223.5 277.2c16-19.7 34-37.7 53.7-53.7l523.3 523.3c-16 19.6-34 37.7-53.7 53.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconStopFill.defaultProps = {
  size: 18,
};

IconStopFill = React.memo ? React.memo(IconStopFill) : IconStopFill;

export default IconStopFill;
