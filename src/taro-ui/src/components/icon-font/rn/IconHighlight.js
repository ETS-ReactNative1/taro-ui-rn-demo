/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconHighlight = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M957.6 507.4L603.2 158.2c-3.1-3.1-8.1-3.1-11.2 0L353.3 393.4c-3.1 3.1-3.2 8.2-0.1 11.3l0.1 0.1 40 39.4-117.2 115.3c-3.1 3.1-3.2 8.2-0.1 11.3l0.1 0.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-0.8 5.6-2.3l76.1-75.6 40.4 39.8c3.1 3.1 8.1 3.1 11.2 0l117.1-115.6 40.1 39.5c3.1 3.1 8.1 3.1 11.2 0l238.7-235.2c3.4-3 3.4-8 0.3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1z m154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHighlight.defaultProps = {
  size: 36,
};

IconHighlight = React.memo ? React.memo(IconHighlight) : IconHighlight;

export default IconHighlight;
