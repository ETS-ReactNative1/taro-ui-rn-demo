/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconStarhalf = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M1024 397.056l-353.792-51.424-158.208-320.576-158.208 320.576-353.792 51.424 256 249.536-60.448 352.352 316.448-166.368 316.448 166.368-60.448-352.352 256-249.536zM512 753.504l-0.928 0.48 0.928-570.784 111.744 226.4 249.824 36.288-180.8 176.224 42.688 248.832-223.456-117.472z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconStarhalf.defaultProps = {
  size: 36,
};

IconStarhalf = React.memo ? React.memo(IconStarhalf) : IconStarhalf;

export default IconStarhalf;
