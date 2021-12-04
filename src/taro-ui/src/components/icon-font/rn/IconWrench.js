/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconWrench = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M876.6 239.5c-0.5-0.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c0.8-0.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9 0.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 0.3l292.9-292.9c85.5 22.8 180.5 0.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-0.1-0.1-274 274.1-79.2-79.2 230.1-230.1s0 0.1 0.1 0.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6 39.2-39.2 92.1-57.3 144-53.5L537 318.9c-12.5 12.5-12.5 32.8 0 45.3l124.5 124.5c12.5 12.5 32.8 12.5 45.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWrench.defaultProps = {
  size: 36,
};

IconWrench = React.memo ? React.memo(IconWrench) : IconWrench;

export default IconWrench;
