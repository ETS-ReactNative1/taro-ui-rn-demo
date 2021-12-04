/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDropboxCircleFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M663.8 455.5zM512.3 361.7l-151.8 93.8 151.8 93.9 151.5-93.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m151.2 595.5L512.6 750l-151-90.5v-33.1l45.4 29.4 105.6-87.7 105.6 87.7 45.1-29.4v33.1z m-45.6-22.4l-105.3-87.7L407 637.1l-151-99.2 104.5-82.4L256 371.2 407 274l105.3 87.7L617.6 274 768 372.1l-104.2 83.5L768 539l-150.4 98.1z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconDropboxCircleFill.defaultProps = {
  size: 36,
};

IconDropboxCircleFill = React.memo ? React.memo(IconDropboxCircleFill) : IconDropboxCircleFill;

export default IconDropboxCircleFill;
