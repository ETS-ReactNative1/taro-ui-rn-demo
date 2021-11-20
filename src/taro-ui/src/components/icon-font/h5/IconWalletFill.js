/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconWalletFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-32 464H528V448h320v128z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M620 512m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconWalletFill.defaultProps = {
  size: 18,
};

export default IconWalletFill;
