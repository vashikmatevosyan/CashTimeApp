import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function SvgComponentPhone(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={15}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M10.274 10.576s1.376-.696 1.737-.863c.36-.168.732-.21.958-.088.342.185 3.217 1.872 3.46 2.022.241.15.358.577.025.996-.332.418-1.86 2.074-2.509 2.057-.649-.019-3.348-.071-8.436-4.562C.42 5.648.36 3.266.34 2.693.32 2.121 2.196.771 2.67.478c.476-.292.961-.182 1.13.024.192.234 2.082 2.763 2.29 3.053.143.198.09.528-.1.845-.189.318-.977 1.533-.977 1.533s.556.836 2.434 2.494c1.88 1.658 2.827 2.149 2.827 2.149Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h17v15H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgComponentPhone;
