import React from 'react';
import {
  StatusBar, StyleSheet, Text, Image, TextInput, TouchableOpacity, View, ScrollView,
} from 'react-native';
import { BLACK, INDIGO_BLUE, WHITE } from '../theme/colors';
import SvgComponentAvatar from '../components/imagesSvgComponents/SvgComponentAvatar';
import { RH, RW } from '../helpers/ratio';
import SvgComponentSearchIcon from '../components/imagesSvgComponents/SvgComponentSearchIcon';
import avatarImage from '../../assets/images/avatar.png';

function Messages({ navigation }) {
  return (
    <View style={styles.messages}>
      <View style={styles.container}>
        <View style={styles.messages__top}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
        <ScrollView style={styles.users} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.users__block} onPress={() => navigation.navigate('MessagesChat')}>
            <Image
              style={{ width: 58, height: 58, borderRadius: 58 }}
              source={avatarImage}
              alt=""
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 20, color: BLACK }}>Amanelia M.</Text>
              <Text style={{
                fontFamily: 'Lato-Regular', fontSize: 14, color: BLACK, marginTop: 3,
              }}
              >
                I’ll Be there in 3 minutes
              </Text>
            </View>
            <Text style={{
              marginLeft: 'auto', fontFamily: 'Lato-Regular', fontSize: 10, color: BLACK,
            }}
            >
              2min ago
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.users__block}>
            <Image
              style={{ width: 58, height: 58, borderRadius: 58 }}
              source={avatarImage}
              alt=""
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 20, color: BLACK }}>Amanelia M.</Text>
              <Text style={{
                fontFamily: 'Lato-Regular', fontSize: 14, color: BLACK, marginTop: 3,
              }}
              >
                I’ll Be there in 3 minutes
              </Text>
            </View>
            <Text style={{
              marginLeft: 'auto', fontFamily: 'Lato-Regular', fontSize: 10, color: BLACK,
            }}
            >
              2min ago
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.users__block}>
            <Image
              style={{ width: 58, height: 58, borderRadius: 58 }}
              source={avatarImage}
              alt=""
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 20, color: BLACK }}>Amanelia M.</Text>
              <Text style={{
                fontFamily: 'Lato-Regular', fontSize: 14, color: BLACK, marginTop: 3,
              }}
              >
                I’ll Be there in 3 minutes
              </Text>
            </View>
            <Text style={{
              marginLeft: 'auto', fontFamily: 'Lato-Regular', fontSize: 10, color: BLACK,
            }}
            >
              2min ago
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.users__block}>
            <Image
              style={{ width: 58, height: 58, borderRadius: 58 }}
              source={avatarImage}
              alt=""
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 20, color: BLACK }}>Amanelia M.</Text>
              <Text style={{
                fontFamily: 'Lato-Regular', fontSize: 14, color: BLACK, marginTop: 3,
              }}
              >
                I’ll Be there in 3 minutes
              </Text>
            </View>
            <Text style={{
              marginLeft: 'auto', fontFamily: 'Lato-Regular', fontSize: 10, color: BLACK,
            }}
            >
              2min ago
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
    alignItems: 'center',
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
  users: {
    width: '100%',
    position: 'relative',
    marginTop: RH(10),
    flexDirection: 'column',
  },
  users__block: {
    width: '100%',
    position: 'relative',
    marginBottom: RH(10),
    flexDirection: 'row',
    alignItems: 'center',
    padding: RH(20),
    borderRadius: 22,
    backgroundColor: '#D9D9D9',
  },
});

export default Messages;
