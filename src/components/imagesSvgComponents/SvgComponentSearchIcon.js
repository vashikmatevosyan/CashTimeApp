import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponentSearchIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...props}
    >
      <Path
        fill="#031054"
        d="M11.873 11.248 9.089 8.464h-.03a5.14 5.14 0 1 0-.595.595v.03l2.784 2.784a.428.428 0 0 0 .608 0 .43.43 0 0 0 .017-.625ZM5.144 9.411a4.283 4.283 0 1 1 0-8.566 4.283 4.283 0 0 1 0 8.566Z"
      />
    </Svg>
  );
}
export default SvgComponentSearchIcon;
