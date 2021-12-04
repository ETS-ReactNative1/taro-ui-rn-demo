/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDownCircleFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m184.5 353.7l-178 246c-3.2 4.4-9.7 4.4-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7H381c10.2 0 19.9 4.9 25.9 13.2L512 563.6l105.2-145.4c6-8.3 15.6-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.5 12.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDownCircleFill.defaultProps = {
  size: 36,
};

IconDownCircleFill = React.memo ? React.memo(IconDownCircleFill) : IconDownCircleFill;

export default IconDownCircleFill;
