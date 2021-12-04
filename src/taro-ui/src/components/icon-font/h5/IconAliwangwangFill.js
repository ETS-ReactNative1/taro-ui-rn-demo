/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconAliwangwangFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M868.2 377.4c-18.9-45.1-46.3-85.6-81.2-120.6-34.7-34.8-75.4-62.1-120.5-81.2-46.7-19.8-96.3-29.8-147.5-29.8-41.9 0-82.9 6.7-121.9 20C306 123.3 200.8 120 170.6 120c-2.2 0-7.4 0-9.4 0.2-11.9 0.4-22.8 6.5-29.2 16.4-6.5 9.9-7.7 22.4-3.4 33.5l64.3 161.6c-34.6 58.3-52.8 125.1-52.8 193.2 0 51.4 10 101 29.8 147.6 18.9 45 46.2 85.6 81.2 120.5 34.7 34.8 75.4 62.1 120.5 81.2C418.3 894 467.9 904 519 904c51.3 0 100.9-10 147.7-29.8 44.9-18.9 85.5-46.3 120.4-81.2 34.7-34.8 62.1-75.4 81.2-120.6 19.8-46.7 29.8-96.5 29.8-147.6-0.2-51.2-10.1-100.8-29.9-147.4z m-325.2 79c0 20.4-16.6 37.1-37.1 37.1-20.4 0-37.1-16.7-37.1-37.1v-55.1c0-20.4 16.6-37.1 37.1-37.1 20.4 0 37.1 16.6 37.1 37.1v55.1z m175.2 0c0 20.4-16.6 37.1-37.1 37.1S644 476.8 644 456.4v-55.1c0-20.4 16.7-37.1 37.1-37.1 20.4 0 37.1 16.6 37.1 37.1v55.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconAliwangwangFill.defaultProps = {
  size: 36,
};

export default IconAliwangwangFill;
