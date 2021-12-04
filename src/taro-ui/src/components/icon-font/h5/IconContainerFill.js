/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconContainerFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M832 64H192c-17.7 0-32 14.3-32 32v529c0-0.6 0.4-1 1-1h219.3l5.2 24.7C397.6 708.5 450.8 752 512 752s114.4-43.5 126.4-103.3l5.2-24.7H863c0.6 0 1 0.4 1 1V96c0-17.7-14.3-32-32-32zM712 493c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48z m0-160c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M863 687H694.1c-11.6 32.8-32 62.3-59.1 84.7-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3c-27.1-22.4-47.5-51.9-59.1-84.7H161c-0.6 0-1-0.4-1-1v242c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V686c0 0.6-0.4 1-1 1z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconContainerFill.defaultProps = {
  size: 36,
};

export default IconContainerFill;
