/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFastBackward = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M517.6 273.5L230.2 499.3c-4.1 3.2-6.2 8-6.2 12.7 0 4.7 2.1 9.5 6.2 12.7l287.4 225.8c10.7 8.4 26.4 0.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7z m320 0L550.2 499.3c-4.1 3.2-6.2 8-6.2 12.7 0 4.7 2.1 9.5 6.2 12.7l287.4 225.8c10.7 8.4 26.4 0.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7z m-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFastBackward.defaultProps = {
  size: 36,
};

IconFastBackward = React.memo ? React.memo(IconFastBackward) : IconFastBackward;

export default IconFastBackward;
