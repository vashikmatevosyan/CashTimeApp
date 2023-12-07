import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { RH, RW } from '../../helpers/ratio';
import { BLACK, WHITE } from '../../theme/colors';
// import { Colors } from "react-native/Libraries/NewAppScreen";


function PhoneNumberInput() {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const input = {
    width: '100%',
    height: RH(45),
    // backgroundColor: WHITE,
    borderColor: '#FFFFFF',
    margin: 0,
    padding: 0,
    // marginBottom: RH(15),
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    color: 'white',
    // backgroundColor: 'orange',
    borderRadius: 8,
    // color: BLACK,
    // borderRadius: 8,
  };
  const textInput = {
    margin: 0,
    padding: 0,
    height: RH(37),
    borderRadius: 8,
    // backgroundColor: 'red',
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const codeTextStyle = {
    // width: 45,
    // padding: 0,
    // border: 0,
    height: RH(23),
    // borderRadius: 8,
    // textAlign: 'center',
    color: 'black',
    padding: 0,
    // flex: 1,
    fontFamily: 'Lato-Semi Bold',
    // fontSize: 14,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: 'white',
    // alignSelf: 'stretch',
  };
  const container = {
    width: 335,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View style={styles.input}>
        {/* <SafeAreaView> */}
        {showMessage && (
        <View>
          <Text>
            Value :
            {value}
          </Text>
          <Text>
            Formatted Value :
            {formattedValue}
          </Text>
          <Text>
            Valid :
            {valid ? 'true' : 'false'}
          </Text>
        </View>
        )}
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="AM"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          containerStyle={input}
          textContainerStyle={container}
          textInputStyle={textInput}
          codeTextStyle={codeTextStyle}
          placeholderTextColor="red"
          // textInputProps={{
          //   placeholder: 'Enter your phone number',
          //   placeholderTextColor: 'gray', // Customize the color of the placeholder text
          //   style: {
          //     fontSize: 16, // Customize the font size
          //     color: 'black', // Customize the color of the input text
          //   },
          // }}
          placeholder="phone number"
          textInputProps={{ placeholderTextColor: BLACK }}
        />
        {/* <TouchableOpacity */}
        {/*      // style={styles.button} */}
        {/*  onPress={() => { */}
        {/*    const checkValid = phoneInput.current?.isValidNumber(value); */}
        {/*    setShowMessage(true); */}
        {/*    setValid(checkValid || false); */}
        {/*  }} */}
        {/* > */}
        {/*  <Text>Chek</Text> */}
        {/* </TouchableOpacity> */}
        {/* </SafeAreaView> */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    width: RW(335),
    height: RH(37),
    backgroundColor: WHITE,
    borderColor: '#FFFFFF',
    color: BLACK,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PhoneNumberInput;
