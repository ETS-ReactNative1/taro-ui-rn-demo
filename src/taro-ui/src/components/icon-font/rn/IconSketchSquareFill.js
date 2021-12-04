/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSketchSquareFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M608.2 423.3L512 326.1l-96.2 97.2zM582.3 625.6l147.9-166.3h-63.4zM672.3 423.3h62.5l-92.1-115.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-81.3 332.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-0.6-3.8-1.7L225.3 444.2c-1.7-1.9-1.7-4.7-0.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 0.7 4 1.9l140.5 175.6c1.7 1.9 1.7 4.7 0 6.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M397.6 459.3L512 684.5l114.4-225.2zM381.3 308.2l-92.1 115.1h62.5zM293.8 459.3l147.9 166.3-84.5-166.3zM420.3 301.1l-23.1 89.8 88.8-89.8zM603.7 301.1H538l88.8 89.8z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconSketchSquareFill.defaultProps = {
  size: 36,
};

IconSketchSquareFill = React.memo ? React.memo(IconSketchSquareFill) : IconSketchSquareFill;

export default IconSketchSquareFill;
