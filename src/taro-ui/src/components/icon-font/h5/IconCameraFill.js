/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconCameraFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M864 260H728l-32.4-90.8C691 156.5 679 148 665.4 148H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 260H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V340c0-44.2-35.8-80-80-80zM512 716c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M512 556m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconCameraFill.defaultProps = {
  size: 36,
};

export default IconCameraFill;
