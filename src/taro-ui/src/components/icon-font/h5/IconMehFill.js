/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMehFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m384 200c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v48z m16-152c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconMehFill.defaultProps = {
  size: 36,
};

export default IconMehFill;
