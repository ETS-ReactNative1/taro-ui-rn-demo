/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconDash = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M112 476h160v72H112zM432 476h160v72H432zM752 476h160v72H752z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconDash.defaultProps = {
  size: 36,
};

export default IconDash;
