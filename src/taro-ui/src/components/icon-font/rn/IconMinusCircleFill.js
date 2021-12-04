/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMinusCircleFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMinusCircleFill.defaultProps = {
  size: 36,
};

IconMinusCircleFill = React.memo ? React.memo(IconMinusCircleFill) : IconMinusCircleFill;

export default IconMinusCircleFill;
