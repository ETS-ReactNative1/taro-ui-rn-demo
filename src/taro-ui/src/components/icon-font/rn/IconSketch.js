/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSketch = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M925.6 405.1l-203-253.7c-1.2-1.5-3.1-2.4-5-2.4H306.4c-1.9 0-3.8 0.9-5 2.4l-203 253.7c-1.9 2.4-1.9 5.9 0.2 8.3l408.6 459.5c1.2 1.4 3 2.1 4.8 2.1 1.8 0 3.5-0.8 4.8-2.1l408.6-459.5c2.1-2.4 2.1-5.9 0.2-8.3zM645.2 206.4l34.4 133.9-132.5-133.9h98.1z m8.2 178.5H370.6L512 242l141.4 142.9zM378.8 206.4h98.1L344.3 340.3l34.5-133.9z m-53.4 7l-44.1 171.5h-93.1l137.2-171.5zM194.6 434.9H289l125.8 247.7-220.2-247.7zM512 763.4L345.1 434.9h333.7L512 763.4z m97.1-80.8L735 434.9h94.4L609.1 682.6z m133.6-297.7l-44.1-171.5 137.2 171.5h-93.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSketch.defaultProps = {
  size: 36,
};

IconSketch = React.memo ? React.memo(IconSketch) : IconSketch;

export default IconSketch;
