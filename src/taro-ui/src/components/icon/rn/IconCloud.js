/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCloud = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z m36.3 281c-23.4 23.4-54.5 36.3-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3-23.4-23.4-36.3-54.6-36.3-87.7 0-28 9.1-54.3 26.2-76.3 16.7-21.3 40.2-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4 14.9-19.2 32.6-35.9 52.4-49.9 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCloud.defaultProps = {
  size: 18,
};

IconCloud = React.memo ? React.memo(IconCloud) : IconCloud;

export default IconCloud;