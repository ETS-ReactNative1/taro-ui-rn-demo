/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconSmallDash = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M112 476h72v72h-72zM294 476h72v72h-72zM658 476h72v72h-72zM840 476h72v72h-72zM476 476h72v72h-72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSmallDash.defaultProps = {
  size: 18,
};

export default IconSmallDash;
