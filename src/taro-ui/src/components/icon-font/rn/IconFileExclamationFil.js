/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFileExclamationFil = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 784c22.092 0 40-17.908 40-40s-17.908-40-40-40-40 17.908-40 40 17.908 40 40 40z m32-152V448a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v184a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFileExclamationFil.defaultProps = {
  size: 36,
};

IconFileExclamationFil = React.memo ? React.memo(IconFileExclamationFil) : IconFileExclamationFil;

export default IconFileExclamationFil;
