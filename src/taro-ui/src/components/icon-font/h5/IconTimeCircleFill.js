/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconTimeCircleFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m176.5 585.7l-28.6 39c-2.6 3.6-7.6 4.3-11.2 1.7L483.3 569.8c-2.1-1.5-3.3-3.9-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTimeCircleFill.defaultProps = {
  size: 36,
};

export default IconTimeCircleFill;
