import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponentCloseBtn(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="none"
      {...props}
    >
      <Circle cx={14} cy={14} r={14} fill="#fff" />
      <Path
        fill="#031054"
        d="M19.326 21h-1.632a.446.446 0 0 1-.297-.093 1.046 1.046 0 0 1-.17-.221l-3.264-5.117a1.84 1.84 0 0 1-.153.348l-3.18 4.769c-.056.079-.119.152-.187.22a.357.357 0 0 1-.263.094H8.65l4.19-6.256-4.02-5.925h1.64c.12 0 .207.02.264.06.057.04.108.096.153.17l3.179 4.879c.04-.119.1-.25.179-.391l3-4.454c.045-.08.1-.142.162-.187a.338.338 0 0 1 .22-.077h1.573l-4.038 5.848L19.326 21Z"
      />
    </Svg>
  );
}
export default SvgComponentCloseBtn;
