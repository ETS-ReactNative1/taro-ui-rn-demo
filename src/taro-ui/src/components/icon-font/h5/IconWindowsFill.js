/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconWindowsFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M523.8 191.4v288.9h382V128.1zM523.8 833.6l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zM120.1 770.6L443 823.2V543.8H120.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconWindowsFill.defaultProps = {
  size: 18,
};

export default IconWindowsFill;
