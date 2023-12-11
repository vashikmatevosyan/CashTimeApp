import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';
import { INDIGO_BLUE, ORANGE, WHITE } from '../../theme/colors';
import SvgComponentVerify from '../../components/imagesSvgComponents/SvgComponentVerify';
import { RH, RW } from '../../helpers/ratio';
import InputVerify from '../../components/global/InputVerify';

function VerifyEmail() {
  const [text, setText] = useState();
  console.log(text);
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
      <View style={styles.verify}>
        <Text style={styles.title}>Verify Your Email</Text>
        <View style={styles.infoImageView}>
          <SvgComponentVerify />
        </View>
        <Text style={styles.text}>
          Please enter the 4 digit Code Sent to  Your Email Youremailexaple.com
        </Text>
        <View>
          <InputVerify onData={setText} />
        </View>
        <TouchableOpacity style={styles.resentCode}>
          <Text style={styles.resentCodeText}>Resent Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirm}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  confirm: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    width: RW(335),
    height: RH(45),
    backgroundColor: ORANGE,
    justifyContent: 'center',
    borderRadius: 20,
  },
  confirmText: {
    color: WHITE,
    fontFamily: 'Lato-Semi Bold',
    fontWeight: '600',
    fontSize: 14,
  },
  resentCode: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  resentCodeText: {
    color: WHITE,
    fontFamily: 'Lato-Semi Bold',
    fontWeight: '600',
    fontSize: 14,
  },
  verify: {
    backgroundColor: INDIGO_BLUE,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  title: {
    color: WHITE,
    fontFamily: 'Lato-Semi Bold',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '800',
    fontStyle: 'normal',
  },
  text: {
    color: WHITE,
    fontFamily: 'Lato-Semi Bold',
    marginBottom: 20,
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    marginVertical: 20,
  },
  infoImageView: {
    width: RW(320),
    height: RH(320),
    backgroundColor: WHITE,
    paddingHorizontal: 40,
    borderRadius: 80,
  },
});

export default VerifyEmail;
