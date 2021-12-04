/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconUpSquare = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M334 624h46.9c10.2 0 19.9-4.9 25.9-13.2L512 465.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246c-3.2-4.4-9.7-4.4-12.9 0l-178 246c-3.9 5.3-0.1 12.7 6.4 12.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconUpSquare.defaultProps = {
  size: 36,
};

IconUpSquare = React.memo ? React.memo(IconUpSquare) : IconUpSquare;

export default IconUpSquare;
