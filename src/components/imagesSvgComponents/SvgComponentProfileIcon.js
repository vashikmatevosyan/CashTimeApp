import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function SvgComponentProfileIcon(props) {
  const { active } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={23}
      fill="none"
      {...props}
    >
      <G
        fill={active ? '#E17A01' : '#000'}
        clipPath="url(#a)"
      >
        <Path d="M3 20.125h12v-4.313s0-1.437-1.5-1.437h-9s-1.5 0-1.5 1.438v4.312ZM9 12.938c1.657 0 3-1.288 3-2.876 0-1.587-1.343-2.874-3-2.874s-3 1.287-3 2.875c0 1.587 1.343 2.874 3 2.874Z" />
        <Path d="M13.81 0H0v23h18V4.014L13.81 0Zm-.312 1.734 2.691 2.579H13.5V1.733ZM1.5 21.563V1.436H12V5.75h4.5v15.814h-15Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v23H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgComponentProfileIcon;
