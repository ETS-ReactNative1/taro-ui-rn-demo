/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconImport = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M902 476H588v-76c0-6.7-7.8-10.5-13-6.3l-141.9 112c-4.1 3.2-4.1 9.4 0 12.6l141.9 112c5.3 4.2 13 0.4 13-6.3v-76h314c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconImport.defaultProps = {
  size: 18,
};

IconImport = React.memo ? React.memo(IconImport) : IconImport;

export default IconImport;