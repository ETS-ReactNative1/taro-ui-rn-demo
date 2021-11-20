/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconUsb = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M760 432V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V548c0-24.3 21.6-44 48.1-44H759.9c26.5 0 48.1 19.7 48.1 44v356c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116z m-424 0V184h352v248H336z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M456 248h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM616 248h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconUsb.defaultProps = {
  size: 18,
};

export default IconUsb;
