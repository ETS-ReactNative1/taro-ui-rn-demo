/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconWindowsFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M523.8 191.4v288.9h382V128.1zM523.8 833.6l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zM120.1 770.6L443 823.2V543.8H120.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWindowsFill.defaultProps = {
  size: 36,
};

IconWindowsFill = React.memo ? React.memo(IconWindowsFill) : IconWindowsFill;

export default IconWindowsFill;
