import * as React from 'react';
import Svg, {
  Path, Defs, LinearGradient, Stop,
} from 'react-native-svg';

function SvgComponentGradientSignUp(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={113}
      height={3}
      fill="none"
      {...props}
    >
      <Path fill="url(#a)" d="M0 0h113v3H0z" />
      <Defs>
        <LinearGradient
          id="a"
          x1={108.292}
          x2={25.672}
          y1={1}
          y2={2.466}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E17A01" />
          <Stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
export default SvgComponentGradientSignUp;
