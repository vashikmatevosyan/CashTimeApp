import * as React from 'react';
import Svg, {
  ClipPath, Defs, G, Path,
} from 'react-native-svg';
import { DARK_BLUE, ORANGE } from '../../theme/colors';

function SvgComponentMapMarker(props) {
  const { checked } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill={checked ? DARK_BLUE : ORANGE}
          d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14Zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponentMapMarker;
