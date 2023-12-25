import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import {
  BLACK, DARK_BLUE, DARK_GREY, ORANGE, WHITE,
} from '../../theme/colors';
import SvgOne from './SvgOne';
import SvgComponentPain from '../imagesSvgComponents/SvgComponentPain';

function CreateCvFinal() {
  return (
    <View style={styles.container}>
      <View style={styles.contentBlock}>
        <View style={styles.firstBlock}>
          <SvgOne />
          <SvgComponentPain />
        </View>
        <Text style={{ ...styles.text, marginBottom: RH(25) }}>Name, Surname</Text>
        <Text style={{ ...styles.text, marginBottom: RH(25), fontSize: RW(20) }}>10$/hr</Text>
        <Text style={styles.text}>Category</Text>
        <Text style={{ ...styles.text, marginBottom: RH(10), color: DARK_GREY }}>Social Media Marketing</Text>
        <Text style={{ ...styles.text, marginBottom: RH(15) }}>Skills</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: RH(25) }}>
          <Text style={styles.skillText}>Wireframe</Text>
          <Text style={styles.skillText}>Figma</Text>
        </View>
        <Text style={styles.text}>Scope</Text>
        <Text style={{ ...styles.text, marginBottom: RH(17), color: DARK_GREY }}>Intermediate</Text>
        <Text style={styles.text}>Location</Text>
        <Text style={{ ...styles.text, marginBottom: RH(17), color: DARK_GREY }}>Armenia, Yerevan</Text>
        <Text style={styles.text}>Education</Text>
        <Text style={{ ...styles.text, marginBottom: RH(17), color: DARK_GREY }}>Bachelor's degree</Text>
        <Text style={{ ...styles.text, marginBottom: RW(25) }}>Bio</Text>
        <Text style={{ ...styles.text, marginBottom: RW(75) }}>Address</Text>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Post This Job</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(30),
    width: '100%',
  },
  contentBlock: {
    backgroundColor: WHITE,
    width: '100%',
    height: '92%',
    borderRadius: RW(20),
    paddingHorizontal: RW(15),
    paddingTop: RH(30),
  },
  firstBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RW(10),
  },
  skillText: {
    color: BLACK,
    width: 'contentWidth',
    fontFamily: 'Lato-Regular',
    fontSize: RW(14),
    paddingVertical: RW(4),
    paddingLeft: RW(12),
    paddingRight: RW(30),
    backgroundColor: ORANGE,
    borderRadius: RW(22),
    marginRight: RW(10),
  },
  text: {
    color: BLACK,
    fontFamily: 'Lato-Bold',
    fontSize: RW(14),
  },
  skillBtnBlock: {
    flex: 1,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(24),
    color: BLACK,
    marginBottom: RH(35),
  },
  btn: {
    backgroundColor: DARK_BLUE,
    paddingVertical: RH(10),
    borderRadius: RW(100),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: WHITE,
    fontFamily: 'Lato-Regular',
    fontSize: RW(14),
  },
});

export default CreateCvFinal;
