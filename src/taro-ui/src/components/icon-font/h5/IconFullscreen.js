/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFullscreen = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M290 236.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L169 160c-5.1-0.6-9.5 3.7-8.9 8.9L179 329.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zM642.7 423.7c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7L863.9 169c0.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4zM845 694.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L734 787.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L855 864c5.1 0.6 9.5-3.7 8.9-8.9L845 694.9zM381.3 600.3c-3.1-3.1-8.2-3.1-11.3 0L236.3 733.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L160.1 855c-0.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-0.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFullscreen.defaultProps = {
  size: 36,
};

export default IconFullscreen;
