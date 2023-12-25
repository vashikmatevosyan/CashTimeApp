import * as React from 'react';
import Svg, { Ellipse } from 'react-native-svg';

function SvgOne(props) {
  return (
    <Svg
      width={76}
      height={75}
      viewBox="0 0 76 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse cx={38} cy={37.5} rx={38} ry={37.5} fill="#E17A01" />
    </Svg>
  );
}

export default SvgOne;
