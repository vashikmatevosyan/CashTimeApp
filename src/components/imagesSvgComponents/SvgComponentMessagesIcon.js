import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponentMessagesIcon(props) {
  const { active } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={21}
      fill="none"
      {...props}
    >
      <Path
        fill={active ? '#E17A01' : '#000'}
        d="M3.125 6.462H18.75V4.846H3.125v1.616Zm8.594 9.692h5.469v-1.615h-5.47v1.615Zm0-3.23h7.031v-1.616h-7.031v1.615Zm0-3.232h7.031V8.077h-7.031v1.615Zm-8.594 6.462h7.031V8.077H3.125v8.077ZM21.875 3.23V0H0v17.77S0 21 3.125 21h19.531S25 20.95 25 17.77V3.23h-3.125ZM3.125 19.385c-1.563 0-1.563-1.616-1.563-1.616V1.615h18.75V17.77c0 .744.222 1.259.529 1.616H3.125Z"
      />
    </Svg>
  );
}
export default SvgComponentMessagesIcon;
