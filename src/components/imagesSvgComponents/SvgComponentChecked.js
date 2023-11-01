import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponentChecked(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={10}
      fill="none"
      {...props}
    >
      <Path fill="#fff" d="m4 9.4-4-4L1.4 4 4 6.6 10.6 0 12 1.4l-8 8Z" />
    </Svg>
  );
}
export default SvgComponentChecked;
