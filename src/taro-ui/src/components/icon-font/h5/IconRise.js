/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconRise = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M917 211.1l-199.2 24c-6.6 0.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1c-3.1 3.1-3.1 8.2 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3c4.7 4.7 12.8 1.9 13.6-4.7l24-199.2c0.7-5.1-3.7-9.5-8.9-8.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconRise.defaultProps = {
  size: 36,
};

export default IconRise;
