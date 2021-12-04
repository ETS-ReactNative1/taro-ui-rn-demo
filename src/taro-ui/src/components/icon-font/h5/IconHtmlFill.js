/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconHtmlFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2z m595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v0.3h-1.2l-0.3 0.1v-0.1h-0.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h0.4l102-27.6 11.4-118.6H510.9v-0.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconHtmlFill.defaultProps = {
  size: 36,
};

export default IconHtmlFill;
