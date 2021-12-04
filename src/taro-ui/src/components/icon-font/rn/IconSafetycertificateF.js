/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSafetycertificateF = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 0.7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c0.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4c-6.4 8.8-19.6 8.8-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5 0.1 10.3 7.5 6.5 12.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSafetycertificateF.defaultProps = {
  size: 36,
};

IconSafetycertificateF = React.memo ? React.memo(IconSafetycertificateF) : IconSafetycertificateF;

export default IconSafetycertificateF;
