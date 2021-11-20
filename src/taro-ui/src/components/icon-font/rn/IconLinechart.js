/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconLinechart = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6c-3.1-3.1-8.2-3.1-11.3 0l-230 229.9L461.4 404c-3.1-3.1-8.2-3.1-11.3 0L266.3 586.7c-3.1 3.1-3.1 8.2 0 11.3l39.5 39.7z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLinechart.defaultProps = {
  size: 18,
};

IconLinechart = React.memo ? React.memo(IconLinechart) : IconLinechart;

export default IconLinechart;
