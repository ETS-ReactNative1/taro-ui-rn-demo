/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSwapRight = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M873.1 596.2l-164-208C703 380.5 693.8 376 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSwapRight.defaultProps = {
  size: 18,
};

IconSwapRight = React.memo ? React.memo(IconSwapRight) : IconSwapRight;

export default IconSwapRight;
