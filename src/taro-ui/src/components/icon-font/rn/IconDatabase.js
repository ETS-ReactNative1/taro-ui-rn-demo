/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDatabase = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z m-600 72h560v208H232V136z m560 480H232V408h560v208z m0 272H232V680h560v208z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M344 240m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M344 512m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M344 784m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

IconDatabase.defaultProps = {
  size: 36,
};

IconDatabase = React.memo ? React.memo(IconDatabase) : IconDatabase;

export default IconDatabase;
