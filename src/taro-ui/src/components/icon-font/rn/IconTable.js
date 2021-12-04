/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconTable = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 208H676V232h212v136z m0 224H676V432h212v160zM412 432h200v160H412V432z m200-64H412V232h200v136z m-476 64h212v160H136V432z m0-200h212v136H136V232z m0 424h212v136H136V656z m276 0h200v136H412V656z m476 136H676V656h212v136z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTable.defaultProps = {
  size: 36,
};

IconTable = React.memo ? React.memo(IconTable) : IconTable;

export default IconTable;
