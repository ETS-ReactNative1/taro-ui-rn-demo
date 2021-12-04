/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBuild = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32z m-504 68h200v200H412V278z m-68 468H144V546h200v200z m268 0H412V546h200v200z m268-268H680V278h200v200z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBuild.defaultProps = {
  size: 36,
};

IconBuild = React.memo ? React.memo(IconBuild) : IconBuild;

export default IconBuild;
