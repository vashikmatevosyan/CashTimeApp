import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function SvgComponentDelete(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={18}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#fff"
          d="M15.429 2.813h-2.943L11.272.817C10.932.31 10.407 0 9.807 0H6.193c-.6 0-1.157.31-1.464.817L3.514 2.813H.57A.565.565 0 0 0 0 3.375v.563c0 .312.254.562.571.562h.572v11.25c0 1.243 1.023 2.25 2.286 2.25h9.142c1.263 0 2.286-1.007 2.286-2.25V4.5h.572c.317 0 .571-.25.571-.563v-.562a.565.565 0 0 0-.571-.563Zm-9.29-1.024a.212.212 0 0 1 .182-.101H9.68c.075 0 .147.04.183.1l.624 1.024H5.514L6.14 1.79Zm6.432 14.524H3.43a.567.567 0 0 1-.572-.563V4.5h10.286v11.25c0 .31-.257.563-.572.563ZM8 14.624a.567.567 0 0 0 .571-.563V6.75A.567.567 0 0 0 8 6.187a.568.568 0 0 0-.571.563v7.313c0 .309.257.562.571.562Zm-2.857 0a.569.569 0 0 0 .571-.563V6.75a.567.567 0 0 0-.571-.563.568.568 0 0 0-.572.563v7.313c0 .309.258.562.572.562Zm5.714 0a.567.567 0 0 0 .572-.563V6.75a.567.567 0 0 0-.572-.563.568.568 0 0 0-.571.563v7.313c0 .309.257.562.571.562Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgComponentDelete;