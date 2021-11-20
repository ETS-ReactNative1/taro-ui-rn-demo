/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconInfomation = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 224m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M544 392h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconInfomation.defaultProps = {
  size: 18,
};

export default IconInfomation;
