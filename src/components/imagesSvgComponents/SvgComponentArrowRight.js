import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponentArrowRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={28}
      fill="none"
      {...props}
    >
      <Path
        fill="#fff"
        d="M17.875 7.875a.882.882 0 0 0-.178.285.935.935 0 0 0 0 .673.882.882 0 0 0 .178.285l3.738 4.024H2.486a.784.784 0 0 0-.574.257.91.91 0 0 0-.238.619.91.91 0 0 0 .238.618.784.784 0 0 0 .574.257h19.11l-3.72 3.998a.91.91 0 0 0-.237.617.91.91 0 0 0 .236.617.784.784 0 0 0 .573.255c.215 0 .42-.092.573-.255l5.167-5.565a.772.772 0 0 0 .163-.254.821.821 0 0 0-.163-.857l-5.16-5.574a.812.812 0 0 0-.264-.191.762.762 0 0 0-.624 0 .812.812 0 0 0-.265.191Z"
      />
    </Svg>
  );
}
export default SvgComponentArrowRight;
