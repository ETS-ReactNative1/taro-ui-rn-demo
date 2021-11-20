/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconHeatmap = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48z m-790.4-23.9L512 231.9 858.7 832H165.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M484.3 358l-228 394c-12.3 21.3 3.1 48 27.7 48h455.8c24.7 0 40.1-26.7 27.7-48L539.7 358c-6.2-10.7-17-16-27.7-16-10.8 0-21.6 5.3-27.7 16z m214 386H325.7L512 422l186.3 322z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M484.3 549.9l-57 98.4C415 669.5 430.4 696 455 696h114c24.6 0 39.9-26.5 27.7-47.7l-57-98.4c-6.1-10.6-16.9-15.9-27.7-15.9s-21.5 5.3-27.7 15.9z m57.1 98.4h-58.7l29.4-50.7 29.3 50.7z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconHeatmap.defaultProps = {
  size: 18,
};

export default IconHeatmap;
