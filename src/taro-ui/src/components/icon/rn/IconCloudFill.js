/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCloudFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCloudFill.defaultProps = {
  size: 18,
};

IconCloudFill = React.memo ? React.memo(IconCloudFill) : IconCloudFill;

export default IconCloudFill;
