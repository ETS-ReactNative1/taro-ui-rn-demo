/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconThunderboltFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M848 359.3H627.7L825.8 109c4.1-5.3 0.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3 0.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconThunderboltFill.defaultProps = {
  size: 36,
};

IconThunderboltFill = React.memo ? React.memo(IconThunderboltFill) : IconThunderboltFill;

export default IconThunderboltFill;
