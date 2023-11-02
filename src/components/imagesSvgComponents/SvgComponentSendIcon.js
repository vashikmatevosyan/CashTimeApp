import * as React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

function SvgComponentSendIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={31}
      fill="none"
      {...props}
    >
      <Ellipse
        cx={16}
        cy={15.5}
        fill="#E17A01"
        rx={15.5}
        ry={16}
        transform="rotate(-90 16 15.5)"
      />
      <Path
        fill="#fff"
        d="M12 12.9a.565.565 0 0 0 .18.107.62.62 0 0 0 .609-.107l2.556-2.254V22.18c0 .13.058.255.162.347a.595.595 0 0 0 .393.143.595.595 0 0 0 .393-.143.463.463 0 0 0 .163-.347V10.656l2.538 2.244a.595.595 0 0 0 .392.142.596.596 0 0 0 .392-.142.462.462 0 0 0 .161-.345.462.462 0 0 0-.161-.346l-3.534-3.116a.496.496 0 0 0-.16-.098.545.545 0 0 0-.545.098L12 12.204a.493.493 0 0 0-.122.16.44.44 0 0 0 0 .377c.029.06.07.113.122.159Z"
      />
    </Svg>
  );
}
export default SvgComponentSendIcon;
