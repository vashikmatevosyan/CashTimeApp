import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function SvgComponentLocation(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#031054"
          d="M10 1.75c-3.22 0-5.833 2.743-5.833 6.125C4.167 12.469 10 19.25 10 19.25s5.833-6.781 5.833-11.375c0-3.382-2.612-6.125-5.833-6.125Zm0 8.313c-1.15 0-2.083-.98-2.083-2.188 0-1.207.933-2.188 2.083-2.188 1.15 0 2.083.98 2.083 2.188 0 1.207-.933 2.188-2.083 2.188Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v21H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponentLocation;
