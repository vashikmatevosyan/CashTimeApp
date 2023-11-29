import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function SvgComponentPrice(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={19}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          stroke="#031054"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M18.8 2.09c0-.525-.448-.95-1-.95h-5.95c-.532 0-1.041-.026-1.337.255L1.422 10.03a.693.693 0 0 0 0 1.016l6.95 6.602c.294.28.774.28 1.069 0l9.091-8.637c.295-.28.267-.752.267-1.269L18.8 2.09Z"
        />
        <Path
          fill="#031054"
          d="M7.776 10.765c.003.327.114.636.332.928l1.743-1.656a5.933 5.933 0 0 1-.414-.75 1.988 1.988 0 0 1-.178-.631 1.082 1.082 0 0 1 .1-.562c.083-.18.22-.36.413-.544A1.947 1.947 0 0 1 11.134 7c.24 0 .478.044.713.135.235.089.453.217.655.384l.434-.413.361.344-.44.42c.31.378.462.771.453 1.18-.008.407-.162.837-.46 1.286l-.559-.53c.346-.496.355-.971.027-1.425L10.7 9.918l.289.475c.066.104.13.239.194.403.063.164.102.345.115.54.013.196-.014.4-.082.61-.068.21-.203.41-.405.602a2.018 2.018 0 0 1-.68.44c-.24.09-.483.132-.73.126a2.098 2.098 0 0 1-.74-.16 2.877 2.877 0 0 1-.71-.424l-.54.512-.362-.343.54-.513c-.395-.458-.591-.934-.589-1.427.002-.494.216-.976.641-1.447l.559.53c-.284.289-.426.596-.424.923Zm1.099 1.531c.138.065.279.101.424.11a1 1 0 0 0 .434-.076c.145-.058.287-.154.428-.287a.941.941 0 0 0 .253-.366.883.883 0 0 0 .042-.378 1.305 1.305 0 0 0-.115-.403 5.1 5.1 0 0 0-.22-.427l-1.65 1.568c.13.107.266.194.404.26Zm2.338-4.57c-.276-.017-.54.093-.79.33a.938.938 0 0 0-.236.332.714.714 0 0 0-.047.343c.014.117.046.237.1.362.052.125.118.255.196.388l1.54-1.462a1.36 1.36 0 0 0-.763-.294Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v19H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponentPrice;