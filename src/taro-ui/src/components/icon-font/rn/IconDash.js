/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDash = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M112 476h160v72H112zM432 476h160v72H432zM752 476h160v72H752z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDash.defaultProps = {
  size: 36,
};

IconDash = React.memo ? React.memo(IconDash) : IconDash;

export default IconDash;
