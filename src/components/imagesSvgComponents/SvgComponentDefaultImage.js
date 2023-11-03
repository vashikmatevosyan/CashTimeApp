import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={59}
      fill="none"
      {...props}
    >
      <Path
        fill="#fff"
        d="M44.414 49.488H3.782c-.49 0-.96-.19-1.306-.53a1.79 1.79 0 0 1-.541-1.28V4.258c0-.48.194-.94.54-1.28.347-.34.817-.53 1.307-.53h40.632c.49 0 .96.19 1.306.53.346.34.54.8.54 1.28v43.42c0 .48-.194.94-.54 1.28-.347.34-.816.53-1.306.53ZM5.629 45.869h36.938V6.067H5.629v39.802Z"
      />
      <Path
        fill="#fff"
        d="M55.495 56.724H14.863c-.49 0-.96-.19-1.306-.53a1.79 1.79 0 0 1-.54-1.279c0-.48.194-.94.54-1.279.346-.34.816-.53 1.306-.53h38.785V13.303h-1.847c-.49 0-.96-.19-1.306-.53a1.79 1.79 0 0 1-.54-1.279c0-.48.194-.94.54-1.279.347-.34.817-.53 1.306-.53h3.694c.49 0 .96.19 1.306.53.346.34.541.8.541 1.28v43.42c0 .48-.194.94-.54 1.28-.347.339-.817.53-1.307.53Z"
      />
      <Path
        fill="#fff"
        d="M3.782 40.188a1.866 1.866 0 0 1-1.293-.524 1.79 1.79 0 0 1-.537-1.276c0-.478.193-.936.537-1.275l7.48-7.527a4.975 4.975 0 0 1 3.114-1.434 5.006 5.006 0 0 1 3.313.91l6.63 4.704a1.275 1.275 0 0 0 1.626-.145l6.833-6.73a5.136 5.136 0 0 1 3.528-1.396c1.316 0 2.58.5 3.528 1.396L45.707 34a1.786 1.786 0 0 1-.115 2.456 1.87 1.87 0 0 1-2.508.077l-7.166-7.11a1.277 1.277 0 0 0-.923-.389 1.297 1.297 0 0 0-.924.389l-6.852 6.784a5.026 5.026 0 0 1-6.427.543l-6.63-4.704a1.256 1.256 0 0 0-1.626.127l-7.443 7.472a1.849 1.849 0 0 1-1.311.542ZM25.668 23.905a7.498 7.498 0 0 1-4.105-1.22 7.27 7.27 0 0 1-2.72-3.247 7.099 7.099 0 0 1-.421-4.181 7.192 7.192 0 0 1 2.022-3.706 7.437 7.437 0 0 1 3.782-1.98 7.53 7.53 0 0 1 4.269.412 7.357 7.357 0 0 1 3.315 2.665 7.11 7.11 0 0 1 .683 6.79 7.23 7.23 0 0 1-1.602 2.348 7.4 7.4 0 0 1-2.396 1.569 7.521 7.521 0 0 1-2.827.55Zm0-10.855c-.73 0-1.445.212-2.052.61a3.636 3.636 0 0 0-1.361 1.624 3.55 3.55 0 0 0-.21 2.09 3.597 3.597 0 0 0 1.01 1.853c.517.506 1.175.85 1.892.99.717.14 1.46.069 2.134-.205a3.679 3.679 0 0 0 1.658-1.333 3.566 3.566 0 0 0 .622-2.01c0-.96-.389-1.88-1.081-2.559a3.733 3.733 0 0 0-2.612-1.06Z"
      />
    </Svg>
  );
}
export default SvgComponent;
