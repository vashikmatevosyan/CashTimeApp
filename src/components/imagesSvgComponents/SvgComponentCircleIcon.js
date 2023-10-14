import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponentCircleIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      {...props}
    >
      <Circle cx={24} cy={24} r={24} fill="#E17A01" />
      <Path
        fill="#fff"
        d="M35.75 25.612h-9.372v9.504h-3.74v-9.504H13.31v-3.388h9.328v-9.548h3.74v9.548h9.372v3.388Z"
      />
    </Svg>
  );
}
export default SvgComponentCircleIcon;
