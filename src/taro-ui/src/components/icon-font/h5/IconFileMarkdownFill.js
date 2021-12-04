/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFileMarkdownFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM426.13 600.93l59.11 132.975a16.003 16.003 0 0 0 14.624 9.503h24.055c6.33 0 12.065-3.732 14.63-9.518l59.109-133.35v157.458c0 8.838 7.165 16.003 16.003 16.003h27.337c8.838 0 16.003-7.165 16.003-16.003V486.002c0-8.838-7.165-16.003-16.003-16.003h-34.746a16.003 16.003 0 0 0-14.673 9.616l-79.473 182.587-79.473-182.587A16.003 16.003 0 0 0 417.96 470h-34.958c-8.838 0-16.003 7.165-16.003 16.003v271.996c0 8.838 7.165 16.003 16.003 16.003h27.126c8.838 0 16.003-7.165 16.003-16.003V600.929z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFileMarkdownFill.defaultProps = {
  size: 36,
};

export default IconFileMarkdownFill;
