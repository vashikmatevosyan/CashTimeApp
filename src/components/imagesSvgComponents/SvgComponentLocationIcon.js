import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function SvgComponentLocationIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={13}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#E17A01"
          d="M7 1.083c-2.255 0-4.083 1.698-4.083 3.792C2.917 7.719 7 11.917 7 11.917s4.083-4.198 4.083-7.042c0-2.094-1.828-3.792-4.083-3.792ZM7 6.23c-.805 0-1.458-.606-1.458-1.354 0-.747.653-1.354 1.458-1.354.805 0 1.458.607 1.458 1.354 0 .748-.653 1.354-1.458 1.354Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h14v13H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgComponentLocationIcon;
