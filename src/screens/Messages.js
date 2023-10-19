import React from 'react';
import {
  StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { Image } from 'react-native-svg';
import { BLACK, INDIGO_BLUE, WHITE } from '../theme/colors';
import SvgComponentAvatar from '../components/imagesSvgComponents/SvgComponentAvatar';
import { RH, RW } from '../helpers/ratio';
import SvgComponentSearchIcon from '../components/imagesSvgComponents/SvgComponentSearchIcon';

function Messages() {
  return (
    <View style={styles.messages}>
      <View style={styles.container}>
        <View style={styles.messages__top}>
          <TouchableOpacity>
            <Text style={styles.messages__top__button}>
              Back
            </Text>
          </TouchableOpacity>
          <Text style={styles.messages__top__text}>
            Chats
          </Text>
          <SvgComponentAvatar />
        </View>
        <View style={styles.input__block}>
          <SvgComponentSearchIcon style={styles.input__icon} />
          <TextInput placeholder="Search Chats" style={styles.input} />
        </View>
        <View style={styles.users}>
          <View style={styles.users__block}>
            <Image src="" alt="" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messages: {
    backgroundColor: WHITE,
    paddingTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'flex-start',
    flex: 1,
  },
  messages__top: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RH(30),
  },
  messages__top__button: {
    color: INDIGO_BLUE,
    fontFamily: 'Lato-Regular',
    fontSize: RW(17),
  },
  messages__top__text: {
    color: BLACK,
    fontFamily: 'Lato-Bold',
    fontSize: RW(20),
  },
  input__block: {
    width: '100%',
    position: 'relative',
    marginTop: RH(20),
  },
  input__icon: {
    position: 'absolute',
    left: 10,
    top: RH(17),
    zIndex: 1,
  },
  input: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#EDECEC',
    paddingLeft: 30,
    paddingRight: 20,
    height: RH(50),
  },
});

export default Messages;
