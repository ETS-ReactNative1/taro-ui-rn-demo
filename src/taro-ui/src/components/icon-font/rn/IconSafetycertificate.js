/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSafetycertificate = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 0.7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c0.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M404.2 453.3c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174c6.4 8.8 19.6 8.8 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSafetycertificate.defaultProps = {
  size: 36,
};

IconSafetycertificate = React.memo ? React.memo(IconSafetycertificate) : IconSafetycertificate;

export default IconSafetycertificate;
