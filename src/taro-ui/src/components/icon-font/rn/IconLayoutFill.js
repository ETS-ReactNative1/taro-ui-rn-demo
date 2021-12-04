/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconLayoutFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 912h496c17.7 0 32-14.3 32-32V340H384v572zM880 112H384v164h528V144c0-17.7-14.3-32-32-32zM112 144v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLayoutFill.defaultProps = {
  size: 36,
};

IconLayoutFill = React.memo ? React.memo(IconLayoutFill) : IconLayoutFill;

export default IconLayoutFill;
