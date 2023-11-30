import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponentArrowSelect(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={9}
      fill="none"
      {...props}
    >
      <Path
        fill="#000"
        fillOpacity={0.5}
        d="m.127 1.74.079.087 5.95 6.524c.2.221.503.359.84.359.336 0 .638-.142.84-.359L13.78 1.84l.1-.108A.623.623 0 0 0 14 1.368c0-.362-.324-.658-.726-.658H.726C.324.71 0 1.006 0 1.368c0 .138.048.267.127.371Z"
      />
    </Svg>
  );
}

export default SvgComponentArrowSelect;
