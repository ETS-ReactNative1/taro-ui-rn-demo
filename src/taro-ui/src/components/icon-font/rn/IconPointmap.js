/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconPointmap = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M352 604m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M454 380m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M660 608m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M768 294m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

IconPointmap.defaultProps = {
  size: 36,
};

IconPointmap = React.memo ? React.memo(IconPointmap) : IconPointmap;

export default IconPointmap;
