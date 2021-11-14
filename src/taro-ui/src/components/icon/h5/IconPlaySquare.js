/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconPlaySquare = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M442.3 677.6l199.4-156.7c5.7-4.5 5.7-13.1 0-17.7L442.3 346.4c-7.4-5.8-18.3-0.6-18.3 8.8v313.5c0 9.4 10.9 14.7 18.3 8.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconPlaySquare.defaultProps = {
  size: 18,
};

export default IconPlaySquare;
