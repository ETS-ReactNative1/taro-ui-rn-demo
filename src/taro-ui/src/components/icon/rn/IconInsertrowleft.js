/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconInsertrowleft = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M248 112h-80c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8zM832 112H368c-17.7 0-32 14.9-32 33.3v733.3c0 18.4 14.3 33.3 32 33.3h464c17.7 0 32-14.9 32-33.3V145.3c0-18.4-14.3-33.3-32-33.3zM568 840H408V664h160v176z m0-240H408V424h160v176z m0-240H408V184h160v176z m224 480H632V664h160v176z m0-240H632V424h160v176z m0-240H632V184h160v176z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconInsertrowleft.defaultProps = {
  size: 18,
};

IconInsertrowleft = React.memo ? React.memo(IconInsertrowleft) : IconInsertrowleft;

export default IconInsertrowleft;
