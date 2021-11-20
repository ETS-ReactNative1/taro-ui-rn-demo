/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconEnter = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112c-4.1 3.2-4.1 9.4 0 12.6l141.9 112c5.3 4.2 13 0.4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEnter.defaultProps = {
  size: 18,
};

IconEnter = React.memo ? React.memo(IconEnter) : IconEnter;

export default IconEnter;
