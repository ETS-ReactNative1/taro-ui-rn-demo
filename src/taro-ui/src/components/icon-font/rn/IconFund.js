/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFund = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32z m-40 632H134V236h752v560z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M227.1 713.7c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L531 565 416.6 450.5c-3.1-3.1-8.2-3.1-11.3 0l-214.9 215c-3.1 3.1-3.1 8.2 0 11.3l36.7 36.9z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconFund.defaultProps = {
  size: 18,
};

IconFund = React.memo ? React.memo(IconFund) : IconFund;

export default IconFund;
