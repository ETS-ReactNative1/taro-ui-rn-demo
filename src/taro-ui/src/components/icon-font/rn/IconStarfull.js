/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconStarfull = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M1024 397.056l-353.792-51.424-158.208-320.576-158.208 320.576-353.792 51.424 256 249.536-60.448 352.352 316.448-166.368 316.448 166.368-60.448-352.352 256-249.536z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconStarfull.defaultProps = {
  size: 36,
};

IconStarfull = React.memo ? React.memo(IconStarfull) : IconStarfull;

export default IconStarfull;
