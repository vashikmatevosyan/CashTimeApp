import * as React from 'react';
import Svg, {
  Path, Defs, LinearGradient, Stop,
} from 'react-native-svg';

function SvgComponentGradientSignUpLeft(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={112}
      height={3}
      fill="none"
      {...props}
    >
      <Path
        fill="url(#a)"
        d="M112 3h111.329v3H112z"
        transform="rotate(-180 112 3)"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={218.691}
          x2={137.292}
          y1={4}
          y2={5.423}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E17A01" />
          <Stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
export default SvgComponentGradientSignUpLeft;
