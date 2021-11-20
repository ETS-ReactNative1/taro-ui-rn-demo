/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBackward = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4 0.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z m320 0L518.2 498c-4.1 3.6-6.2 8.8-6.2 14 0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4 0.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBackward.defaultProps = {
  size: 18,
};

IconBackward = React.memo ? React.memo(IconBackward) : IconBackward;

export default IconBackward;
