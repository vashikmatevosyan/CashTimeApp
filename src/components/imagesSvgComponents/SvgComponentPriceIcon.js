import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function SvgComponentPriceIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={20}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          stroke="#000"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M20.68 2.2c0-.552-.492-1-1.1-1h-6.545c-.586 0-1.146-.027-1.47.268L1.564 10.559a.708.708 0 0 0 0 1.07l7.644 6.95a.892.892 0 0 0 1.177 0l10-9.092c.325-.295.294-.792.294-1.336L20.68 2.2Z"
        />
        <Path
          fill="#000"
          d="M8.554 11.332c.003.344.125.67.365.976l1.917-1.743a6.148 6.148 0 0 1-.455-.789 2.023 2.023 0 0 1-.196-.664 1.095 1.095 0 0 1 .11-.592c.09-.189.243-.38.455-.573.217-.197.454-.343.712-.437a2.261 2.261 0 0 1 1.57 0c.258.094.498.23.72.404l.477-.434.398.362-.485.441c.342.399.509.813.5 1.243-.01.43-.18.881-.507 1.354l-.615-.558c.381-.522.391-1.022.03-1.5l-1.78 1.618.318.5c.072.11.143.251.214.424.07.173.111.363.126.57.014.205-.016.419-.09.64-.075.222-.224.433-.446.635-.236.215-.485.37-.748.463-.263.095-.531.139-.803.132a2.398 2.398 0 0 1-.815-.168 3.199 3.199 0 0 1-.78-.446l-.594.539-.398-.362.593-.54c-.434-.482-.65-.983-.647-1.502.002-.52.238-1.027.705-1.523l.615.559c-.312.303-.468.627-.466.97Zm1.208 1.611a1.3 1.3 0 0 0 .467.115c.159.009.318-.018.478-.079a1.52 1.52 0 0 0 .47-.302.99.99 0 0 0 .278-.385.892.892 0 0 0 .047-.398 1.328 1.328 0 0 0-.127-.424 5.3 5.3 0 0 0-.242-.45l-1.816 1.65c.145.114.294.205.445.273Zm2.572-4.811c-.303-.018-.593.098-.868.348a.989.989 0 0 0-.26.35.721.721 0 0 0-.051.36c.014.124.05.25.108.382.058.132.13.268.217.408l1.693-1.54a1.537 1.537 0 0 0-.839-.308Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h22v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgComponentPriceIcon;