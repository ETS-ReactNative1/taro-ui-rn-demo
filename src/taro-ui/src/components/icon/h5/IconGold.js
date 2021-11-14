/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconGold = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M342 472h342c0.4 0 0.9 0 1.3-0.1 4.4-0.7 7.3-4.8 6.6-9.2l-40.2-248c-0.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-0.1 0.4-0.1 0.9-0.1 1.3 0 4.4 3.6 8 8 8z m91.2-196h159.5l20.7 128h-201l20.8-128zM435.7 558.7c-0.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-0.1 0.4-0.1 0.9-0.1 1.3 0 4.4 3.6 8 8 8h342c0.4 0 0.9 0 1.3-0.1 4.4-0.7 7.3-4.8 6.6-9.2l-40.2-248zM196.5 748l20.7-128h159.5l20.7 128H196.5zM905.9 806.7l-40.2-248c-0.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-0.1 0.4-0.1 0.9-0.1 1.3 0 4.4 3.6 8 8 8h342c0.4 0 0.9 0 1.3-0.1 4.3-0.7 7.3-4.8 6.6-9.2zM626.5 748l20.7-128h159.5l20.7 128H626.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconGold.defaultProps = {
  size: 18,
};

export default IconGold;
