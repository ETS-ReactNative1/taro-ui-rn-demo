/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDropbox = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 556.9l264.2 173.5L512.5 577 246.8 412.7zM960 266.6zM960 266.6L696.8 95 512.5 248.5l265.2 164.2L512.5 577l184.3 153.4L960 558.8 777.7 412.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M513 609.8L328.2 763.3l-79.4-51.5v57.8L513 928l263.7-158.4v-57.8l-78.9 51.5zM328.2 95L64 265.1l182.8 147.6 265.7-164.2zM64 556.9z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconDropbox.defaultProps = {
  size: 36,
};

IconDropbox = React.memo ? React.memo(IconDropbox) : IconDropbox;

export default IconDropbox;
