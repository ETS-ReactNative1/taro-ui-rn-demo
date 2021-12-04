/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBatchfolding = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32z m-40 600H184V312h528v528z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M880 112H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM300 550h296v64H300z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBatchfolding.defaultProps = {
  size: 36,
};

IconBatchfolding = React.memo ? React.memo(IconBatchfolding) : IconBatchfolding;

export default IconBatchfolding;
