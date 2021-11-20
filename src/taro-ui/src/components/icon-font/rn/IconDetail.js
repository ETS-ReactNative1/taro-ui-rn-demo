/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDetail = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM492 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM492 688h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M380 368m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M380 512m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M380 656m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

IconDetail.defaultProps = {
  size: 18,
};

IconDetail = React.memo ? React.memo(IconDetail) : IconDetail;

export default IconDetail;
