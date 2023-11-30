import * as React from 'react';
import Svg, { Rect, Ellipse } from 'react-native-svg';

function SvgComponentLanguageSelected(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      {...props}
    >
      <Rect width={38} height={38} x={1} y={1} fill="#031054" rx={19} />
      <Rect
        width={38}
        height={38}
        x={1}
        y={1}
        stroke="#031054"
        strokeWidth={2}
        rx={19}
      />
      <Ellipse cx={20} cy={19.5} fill="#D9D9D9" rx={13} ry={12.5} />
    </Svg>
  );
}

export default SvgComponentLanguageSelected;
