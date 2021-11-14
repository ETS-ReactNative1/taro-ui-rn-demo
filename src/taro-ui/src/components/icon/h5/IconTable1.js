/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconTable1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M117 368h231v64H117zM676 368h241v64H676zM412 368h200v64H412zM412 592h200v64H412zM676 592h241v64H676zM117 592h231v64H117zM412 432V179h-64v666h64V592zM676 368V179h-64v666h64V432z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTable1.defaultProps = {
  size: 18,
};

export default IconTable1;
