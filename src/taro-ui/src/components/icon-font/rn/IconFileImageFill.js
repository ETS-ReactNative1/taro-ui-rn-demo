/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFileImageFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z m296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2c3.2-4.1 9.4-4.1 12.6 0l41.1 52.4 77.8-99.2c3.2-4.1 9.4-4.1 12.6 0l136.5 174c4.3 5.2 0.5 12.9-6.1 12.9z m-94-370V137.8L790.2 326H602z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFileImageFill.defaultProps = {
  size: 36,
};

IconFileImageFill = React.memo ? React.memo(IconFileImageFill) : IconFileImageFill;

export default IconFileImageFill;
