import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponentHistory(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={15}
      fill="none"
      {...props}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M8.4 0C5.6 0 3.12 1.5 1.84 3.79L0 1.973v5.131h5.2l-2.24-2.21C4 2.92 6 1.579 8.4 1.579c3.28 0 6 2.684 6 5.921s-2.72 5.921-6 5.921c-2.64 0-4.8-1.658-5.68-3.947H1.04C1.92 12.632 4.88 15 8.4 15c4.24 0 7.6-3.395 7.6-7.5S12.56 0 8.4 0ZM7.2 3.947v4.027l3.76 2.21.64-1.026-3.2-1.895V3.947H7.2Z"
        clipRule="evenodd"
        opacity={0.9}
      />
    </Svg>
  );
}
export default SvgComponentHistory;
