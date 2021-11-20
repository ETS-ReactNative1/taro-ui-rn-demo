/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFlag = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184z m656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFlag.defaultProps = {
  size: 18,
};

IconFlag = React.memo ? React.memo(IconFlag) : IconFlag;

export default IconFlag;
