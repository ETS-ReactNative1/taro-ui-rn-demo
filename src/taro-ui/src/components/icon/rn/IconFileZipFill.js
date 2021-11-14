/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFileZipFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64z m64 64v64h64v-64h-64z m-64 64v64h64v-64h-64z m64 64v64h64v-64h-64z m-64 64v64h64v-64h-64z m64 64v64h64v-64h-64z m-64 64v64h64v-64h-64z m0 64v160h128V584H296z m48 48h32v64h-32v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFileZipFill.defaultProps = {
  size: 18,
};

IconFileZipFill = React.memo ? React.memo(IconFileZipFill) : IconFileZipFill;

export default IconFileZipFill;
