/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFundFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32z m-92.3 194.4l-297 297.2c-3.1 3.1-8.2 3.1-11.3 0L410.9 541.1 238.4 713.7c-3.1 3.1-8.2 3.1-11.3 0l-36.8-36.8c-3.1-3.1-3.1-8.2 0-11.3l214.9-215c3.1-3.1 8.2-3.1 11.3 0L531 565l254.5-254.6c3.1-3.1 8.2-3.1 11.3 0l36.8 36.8c3.2 3 3.2 8.1 0.1 11.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFundFill.defaultProps = {
  size: 36,
};

export default IconFundFill;
