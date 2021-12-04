/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMonitor = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M692.8 412.7l0.2-0.2-34.6-44.3c-2.7-3.5-7.7-4.1-11.2-1.4l-50.4 39.3-70.5-90.1c-2.7-3.5-7.7-4.1-11.2-1.4l-37.9 29.7c-3.5 2.7-4.1 7.7-1.4 11.2l70.5 90.2-0.2 0.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1c-3.1 3.1-3.1 8.2 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112z m161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconMonitor.defaultProps = {
  size: 36,
};

IconMonitor = React.memo ? React.memo(IconMonitor) : IconMonitor;

export default IconMonitor;
