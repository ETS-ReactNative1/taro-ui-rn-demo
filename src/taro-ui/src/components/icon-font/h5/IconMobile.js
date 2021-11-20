/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMobile = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64z m-8 824H288V134h448v752z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M512 784m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconMobile.defaultProps = {
  size: 18,
};

export default IconMobile;
