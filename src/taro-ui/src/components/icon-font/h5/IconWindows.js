/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconWindows = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M120.1 770.6L443 823.2V543.8H120.1v226.8z m63.4-163.5h196.2v141.6l-196.2-31.9V607.1zM523.8 833.6l382 62.2v-352h-382v289.8z m63.4-226.5h255.3v214.4l-255.3-41.6V607.1zM523.8 191.4v288.8h382V128.1l-382 63.3z m318.7 225.5H587.3V245l255.3-42.3v214.2zM120.1 480.2H443V201.9l-322.9 53.5v224.8zM183.5 309l196.2-32.5v140.4H183.5V309z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconWindows.defaultProps = {
  size: 18,
};

export default IconWindows;