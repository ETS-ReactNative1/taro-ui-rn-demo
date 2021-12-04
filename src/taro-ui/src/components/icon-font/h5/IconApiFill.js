/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconApiFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1 0.8-5.7 2.3l-76.1 76.1c-33.7-22.9-72.9-34.3-112.1-34.3-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7c-3.1 3.1-3.1 8.2 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-0.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM578.9 546.7c-3.1-3.1-8.2-3.1-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6c-3.1-3.1-8.2-3.1-11.3 0L363 475.3l-43-43c-1.6-1.6-3.6-2.3-5.7-2.3-2 0-4.1 0.8-5.7 2.3L206.8 534.2c-68.9 68.9-77 175.7-24.3 253.5l-76.1 76.1c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-0.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconApiFill.defaultProps = {
  size: 36,
};

export default IconApiFill;
