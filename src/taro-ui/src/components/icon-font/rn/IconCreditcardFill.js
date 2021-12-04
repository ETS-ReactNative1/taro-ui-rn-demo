/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCreditcardFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M928 160H96c-17.7 0-32 14.3-32 32v160h896V192c0-17.7-14.3-32-32-32zM64 832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V440H64v392z m579-184c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCreditcardFill.defaultProps = {
  size: 36,
};

IconCreditcardFill = React.memo ? React.memo(IconCreditcardFill) : IconCreditcardFill;

export default IconCreditcardFill;
