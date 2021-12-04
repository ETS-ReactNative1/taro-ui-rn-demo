/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMeh = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M336 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M688 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2-44.3-18.7-84.1-45.6-118.3-79.8-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8c18.7-44.3 45.6-84.1 79.8-118.3 34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2 44.3 18.7 84.1 45.6 118.3 79.8 34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8c-18.7 44.3-45.6 84.1-79.8 118.2z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  );
};

IconMeh.defaultProps = {
  size: 36,
};

export default IconMeh;
