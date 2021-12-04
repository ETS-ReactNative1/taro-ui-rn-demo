/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconAlertFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 244c176.179 0 319 142.821 319 319v233c0 17.673-14.327 32-32 32H225c-17.673 0-32-14.327-32-32V563c0-176.179 142.821-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.255 191.657a8 8 0 0 1 11.314 0l67.882 67.882a8 8 0 0 1 0 11.314l-39.598 39.598a8 8 0 0 1-11.314 0l-67.882-67.882a8 8 0 0 1 0-11.314l39.598-39.598z m669.598 0l39.598 39.598a8 8 0 0 1 0 11.314l-67.882 67.882a8 8 0 0 1-11.314 0l-39.598-39.598a8 8 0 0 1 0-11.314l67.882-67.882a8 8 0 0 1 11.314 0zM192 892h640c17.673 0 32 14.327 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24c0-17.673 14.327-32 32-32z m148-317v253h64V575h-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconAlertFill.defaultProps = {
  size: 36,
};

export default IconAlertFill;
