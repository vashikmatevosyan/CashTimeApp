import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import {
  BLACK, ORANGE, WHITE,
} from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import avatarImage from '../../assets/images/avatar.png';
import SvgComponentEditIconOrange
  from '../components/imagesSvgComponents/SvgComponentEditIconOrange';
import ProfileEditModal from '../components/screenComponents/profileEditModal';

function ProfileEdit() {
  const [flag, setFlag] = useState(true);
  return (
    <ScrollView contentContainerStyle={styles.profileEdit}>
      <View style={styles.container}>
        <View style={styles.editBox}>
          {flag
            ? (
              <TouchableOpacity onPress={() => setFlag(false)} style={styles.imgViewBtn}>
                <SvgComponentEditIconOrange />
              </TouchableOpacity>
            ) : null}
          {flag ? (
            <>
              <View style={styles.imgView}>
                <Image source={avatarImage} style={styles.imgViewImg} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>First Name</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>Last Name</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>Add CV Link</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>Location</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>Specialized In</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>Expert</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>Skills</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>Phone Number</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>Education</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.bigText}>Languages</Text>
              </View>
            </>
          ) : <ProfileEditModal onpress={setFlag} />}

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileEdit: {
    paddingTop: RH(25),
    position: 'relative',
    backgroundColor: WHITE,
    minHeight: '100%',
  },
  container: {
    width: '90%',
    // height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  editBox: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgView: {
    width: RW(120),
    height: RH(120),
    backgroundColor: 'transparent',
    borderRadius: 60,
  },
  imgViewImg: {
    width: RW(120),
    height: RH(120),
    borderRadius: 60,
    overflow: 'hidden',
  },
  imgViewBtn: {
    alignSelf: 'flex-end',
  },
  textView: {
    flexDirection: 'column',
    width: '100%',
    marginTop: RH(20),
  },
  bigText: {
    color: BLACK,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
  },
  inputView: {
    width: '100%',
    marginTop: RH(20),
  },
  input: {
    width: '100%',
    height: RH(40),
    marginTop: RH(20),
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
  },
  saveBtn: {
    width: '100%',
    height: RH(40),
    backgroundColor: ORANGE,
    borderRadius: 100,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtnText: {
    color: WHITE,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
});
export default ProfileEdit;
