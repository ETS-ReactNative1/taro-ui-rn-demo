/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCompassFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM327.3 702.4c-2 0.9-4.4 0-5.3-2.1-0.4-1-0.4-2.2 0-3.2l98.7-225.5 132.1 132.1-225.5 98.7z m375.1-375.1l-98.7 225.5-132.1-132.1L697.1 322c2-0.9 4.4 0 5.3 2.1 0.4 1 0.4 2.1 0 3.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCompassFill.defaultProps = {
  size: 36,
};

IconCompassFill = React.memo ? React.memo(IconCompassFill) : IconCompassFill;

export default IconCompassFill;
