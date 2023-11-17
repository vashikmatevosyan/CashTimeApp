import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponentStar(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      {...props}
    >
      <Path
        fill={props.isActive ? '#E17A01' : '#D9D9D9'}
        d="m24 0 5.388 16.584h17.437L32.718 26.833l5.389 16.583L24 33.167 9.893 43.417l5.388-16.584-14.106-10.25h17.437L24 0Z"
      />
    </Svg>
  );
}
export default SvgComponentStar;
