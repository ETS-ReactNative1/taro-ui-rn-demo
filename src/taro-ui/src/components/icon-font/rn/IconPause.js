/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconPause = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M304 176h80v672h-80zM712 176h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPause.defaultProps = {
  size: 18,
};

IconPause = React.memo ? React.memo(IconPause) : IconPause;

export default IconPause;
