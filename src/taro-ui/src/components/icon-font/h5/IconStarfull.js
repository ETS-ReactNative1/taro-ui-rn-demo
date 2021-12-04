/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconStarfull = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1025 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1024 397.056l-353.792-51.424-158.208-320.576-158.208 320.576-353.792 51.424 256 249.536-60.448 352.352 316.448-166.368 316.448 166.368-60.448-352.352 256-249.536z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconStarfull.defaultProps = {
  size: 36,
};

export default IconStarfull;
