/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconTable1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M117 368h231v64H117zM676 368h241v64H676zM412 368h200v64H412zM412 592h200v64H412zM676 592h241v64H676zM117 592h231v64H117zM412 432V179h-64v666h64V592zM676 368V179h-64v666h64V432z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTable1.defaultProps = {
  size: 36,
};

IconTable1 = React.memo ? React.memo(IconTable1) : IconTable1;

export default IconTable1;
