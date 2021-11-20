/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconLayoutFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M384 912h496c17.7 0 32-14.3 32-32V340H384v572zM880 112H384v164h528V144c0-17.7-14.3-32-32-32zM112 144v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconLayoutFill.defaultProps = {
  size: 18,
};

export default IconLayoutFill;
