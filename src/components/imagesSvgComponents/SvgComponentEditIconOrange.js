import * as React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

function SvgComponentEditIconOrange(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={51}
      fill="none"
      {...props}
    >
      <Ellipse cx={25.284} cy={25.747} fill="#E17A01" rx={24.716} ry={25.239} />
      <Path
        fill="#fff"
        d="m17.337 30.682-.88 5.609 5.492-.9.546-.599 16.687-16.998-4.612-4.667-16.646 16.998-.587.557Zm1.132.899 2.558 2.655-3.103.513.545-3.168Zm18.91-13.787-1.635 1.712-2.767-2.868 1.677-1.67 2.725 2.826Zm-5.325-.257 2.81 2.869-12.83 13.059-2.768-2.869 12.788-13.059Z"
      />
    </Svg>
  );
}
export default SvgComponentEditIconOrange;
