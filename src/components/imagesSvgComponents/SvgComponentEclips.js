import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function SvgComponentEclips(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={5}
      height={17}
      fill="none"
      {...props}
    >
      <Circle cx={2.5} cy={2.5} r={2.5} fill="#031054" />
      <Circle cx={2.5} cy={8.5} r={2.5} fill="#031054" />
      <Circle cx={2.5} cy={14.5} r={2.5} fill="#031054" />
    </Svg>
  );
}
export default SvgComponentEclips;
