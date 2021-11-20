/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconAreachart = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M272 728h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124c-3.1-3.1-8.2-3.1-11.3 0l-189 189.6c-1.5 1.5-2.3 3.5-2.3 5.6V720c0 4.4 3.6 8 8 8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconAreachart.defaultProps = {
  size: 18,
};

IconAreachart = React.memo ? React.memo(IconAreachart) : IconAreachart;

export default IconAreachart;
