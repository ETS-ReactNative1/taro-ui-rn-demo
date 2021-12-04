/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMailFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9c-1.8-1.4-2.8-3.5-2.8-5.7 0-4 3.2-7.2 7.2-7.2h648.8c2.2 0 4.3 1 5.7 2.8 2.4 3.1 1.9 7.6-1.3 10.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMailFill.defaultProps = {
  size: 36,
};

IconMailFill = React.memo ? React.memo(IconMailFill) : IconMailFill;

export default IconMailFill;
