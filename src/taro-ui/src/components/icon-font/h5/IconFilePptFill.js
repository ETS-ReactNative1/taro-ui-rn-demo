/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFilePptFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM468.526 760v-91.537h59.277c60.57 0 100.197-39.655 100.197-98.125C628 512.116 588.424 472 528.016 472H424c-6.627 0-12 5.373-12 12v276c0 6.627 5.373 12 12 12h32.526c6.628 0 12-5.373 12-12z m0-139.326h34.907c47.815 0 67.186-12.937 67.186-50.336 0-32.045-18.117-50.121-49.87-50.121h-52.223v100.457z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFilePptFill.defaultProps = {
  size: 36,
};

export default IconFilePptFill;
