import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponentEditIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="none"
      {...props}
    >
      <Circle cx={14} cy={14} r={14} fill="#D9D9D9" />
      <Path
        fill="#031054"
        d="M9.499 16.738 9 19.848l3.111-.498.309-.333 9.452-9.428L19.26 7l-9.429 9.429-.332.309Zm.641.498 1.449 1.473-1.758.285.309-1.758ZM20.851 9.59l-.926.95-1.567-1.591.95-.927L20.85 9.59Zm-3.016-.143 1.591 1.591-7.267 7.244-1.568-1.591 7.244-7.244Z"
      />
    </Svg>
  );
}
export default SvgComponentEditIcon;
