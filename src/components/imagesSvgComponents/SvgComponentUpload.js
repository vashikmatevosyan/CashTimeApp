import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function SvgComponentUpload(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={66}
      height={72}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#031054"
          d="M57.75 45v9H66v6h-8.25v9h-5.5v-9H44v-6h8.25v-9h5.5Zm.022-36c1.507 0 2.728 1.335 2.728 2.979V39H55V15H11v41.997L38.5 27l8.25 9v8.487l-8.25-9L18.774 57H38.5v6H8.228a2.62 2.62 0 0 1-1.93-.874 3.122 3.122 0 0 1-.798-2.105V11.979a3.143 3.143 0 0 1 .804-2.1A2.64 2.64 0 0 1 8.228 9h49.544ZM22 21c1.459 0 2.858.632 3.89 1.757C26.92 23.883 27.5 25.41 27.5 27c0 1.591-.58 3.117-1.61 4.243C24.857 32.368 23.458 33 22 33s-2.858-.632-3.89-1.757C17.08 30.117 16.5 28.59 16.5 27c0-1.591.58-3.117 1.61-4.243C19.143 21.632 20.542 21 22 21Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h66v72H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgComponentUpload;
