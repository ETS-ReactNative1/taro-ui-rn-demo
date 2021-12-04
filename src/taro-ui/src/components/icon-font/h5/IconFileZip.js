/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFileZip = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M296 392h64v64h-64zM296 582v160h128V582h-64v-62h-64v62z m80 48v64h-32v-64h32zM360 328h64v64h-64zM296 264h64v64h-64zM360 456h64v64h-64zM360 200h64v64h-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h64v64h64v-64h174v216c0 23.2 18.8 42 42 42h216v494z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconFileZip.defaultProps = {
  size: 36,
};

export default IconFileZip;
