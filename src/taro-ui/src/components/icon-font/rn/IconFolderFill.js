/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFolderFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880 298.4H521L403.7 186.2c-1.5-1.4-3.5-2.2-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFolderFill.defaultProps = {
  size: 18,
};

IconFolderFill = React.memo ? React.memo(IconFolderFill) : IconFolderFill;

export default IconFolderFill;
