/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShopFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7c0 24.4 4.8 48.1 14.4 70.4 4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h274V736h128v176h274c17.7 0 32-14.3 32-32V535c6.1-9.1 11.3-18.8 15.6-28.9 9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9z m-72 568H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1 0.2-0.1 0.4-0.1 0.6 0 11.9 8.9 24.8 16.3 38.7 22.1 22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1 0.2-0.1 0.4-0.1 0.6 0 11.9 8.9 24.8 16.3 38.7 22.1 22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2z m0-568.1H214v-88h596v88z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShopFill.defaultProps = {
  size: 36,
};

IconShopFill = React.memo ? React.memo(IconShopFill) : IconShopFill;

export default IconShopFill;
