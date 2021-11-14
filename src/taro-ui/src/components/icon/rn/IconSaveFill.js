/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSaveFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176z m128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 506c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSaveFill.defaultProps = {
  size: 18,
};

IconSaveFill = React.memo ? React.memo(IconSaveFill) : IconSaveFill;

export default IconSaveFill;
