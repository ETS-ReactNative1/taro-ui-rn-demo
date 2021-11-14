/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFileZipFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64z m64 64v64h64v-64h-64z m-64 64v64h64v-64h-64z m64 64v64h64v-64h-64z m-64 64v64h64v-64h-64z m64 64v64h64v-64h-64z m-64 64v64h64v-64h-64z m0 64v160h128V584H296z m48 48h32v64h-32v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFileZipFill.defaultProps = {
  size: 18,
};

export default IconFileZipFill;
