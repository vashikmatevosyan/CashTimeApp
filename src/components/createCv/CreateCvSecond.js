import React from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import { BLACK, WHITE } from '../../theme/colors';

function CreateCvSecond() {
  return (
    <View style={styles.container}>
      <View style={styles.contentBlock}>
        <Text style={styles.title}>What’s Your Professional Role?</Text>
        <TextInput placeholder="UI/UX designer Softer Engineer IOS" style={styles.input} />
        <Text style={styles.title}>Which Languages Do You Know?</Text>
        <View>
          <TextInput placeholder="Search Chats" style={styles.input} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(80),
    width: '100%',
  },
  contentBlock: {
    backgroundColor: WHITE,
    width: '100%',
    height: '90%',
    borderRadius: RW(20),
    paddingHorizontal: RW(15),
    paddingTop: RH(30),
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(24),
    color: BLACK,
  },
});

export default CreateCvSecond;
