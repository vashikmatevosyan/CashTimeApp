import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet, TextInput, View,
} from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import { WHITE } from '../../theme/colors';

function InputVerify(props) {
  const { onData } = props;
  const inputs = useRef([]);
  const [code, setCode] = useState('');

  const handleInputChange = (index, e) => {
    const value = e;
    if (value?.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
    setCode((prevState) => {
      const nextCode = prevState.substring(0, index) + value + prevState.substring(index + 1);
      return nextCode;
    });
  };

  useEffect(() => {
    onData(code);
  }, [code]);
  const handleKeyDown = (index, e) => {
    const { value } = e.target;
    if (e.keyCode === 8 && value?.length === 0 && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.input__verify__div}>
      {Array.from({ length: 4 }, (_, index) => (
        <TextInput
          style={styles.input}
          key={index}
          ref={(ref) => {
            inputs.current[index] = ref;
            return null;
          }}
          maxLength={1}
          onKeyPress={(e) => {
            if (!/^\d$/.test(e.key)) {
              e.preventDefault();
            }
          }}
          onChangeText={(text) => handleInputChange(index, text)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: RW(45),
    height: RH(45),
    backgroundColor: WHITE,
    marginHorizontal: 3,
    textAlign: 'center',
  },
  input__verify__div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default InputVerify;
