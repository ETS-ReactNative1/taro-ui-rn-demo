/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSmileFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m224 272c-85.5 0-155.6-67.3-160-151.6-0.2-4.6 3.4-8.4 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c0.3-4.2 3.9-7.4 8.1-7.4H664c4.6 0 8.2 3.8 8 8.4-4.4 84.3-74.5 151.6-160 151.6z m176-224c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSmileFill.defaultProps = {
  size: 36,
};

IconSmileFill = React.memo ? React.memo(IconSmileFill) : IconSmileFill;

export default IconSmileFill;
