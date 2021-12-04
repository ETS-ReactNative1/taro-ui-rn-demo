/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFund = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32z m-40 632H134V236h752v560z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M227.1 713.7c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L531 565 416.6 450.5c-3.1-3.1-8.2-3.1-11.3 0l-214.9 215c-3.1 3.1-3.1 8.2 0 11.3l36.7 36.9z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconFund.defaultProps = {
  size: 36,
};

export default IconFund;
