/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconTabletFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTabletFill.defaultProps = {
  size: 18,
};

IconTabletFill = React.memo ? React.memo(IconTabletFill) : IconTabletFill;

export default IconTabletFill;
