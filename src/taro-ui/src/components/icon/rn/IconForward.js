/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconForward = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M825.8 498L538.4 249.9c-10.7-9.2-26.4-0.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28z m-320 0L218.4 249.9c-10.7-9.2-26.4-0.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconForward.defaultProps = {
  size: 18,
};

IconForward = React.memo ? React.memo(IconForward) : IconForward;

export default IconForward;
