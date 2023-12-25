import React, { useEffect } from 'react';
import {
  StyleSheet, View, Text, StatusBar, TouchableOpacity, ScrollView, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  BLACK, INDIGO_BLUE, LIGHT_GREY, ORANGE, WHITE,
} from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import SvgComponentEclips from '../components/imagesSvgComponents/SvgComponentEclips';
import SvgComponentDefaultImage from '../components/imagesSvgComponents/SvgComponentDefaultImage';
import SvgComponentLocationIcon from '../components/imagesSvgComponents/SvgComponentLocationIcon';
// import { getProfile } from '../store/actions/users';

// import SvgComponentEditIcon from '../components/imagesSvgComponents/SvgComponentEditIcon';
// import SvgComponentPriceIcon from '../components/imagesSvgComponents/SvgComponentPriceIcon';

function Profile() {
  const navigation = useNavigation();

  const userInfo = useSelector((state) => state.users.profile);
  const cvInfo = userInfo.createdCvs;
  console.log(cvInfo.experience);
  return (
    <ScrollView contentContainerStyle={styles.profile}>

      <View style={styles.container}>
        <View style={styles.profileRow}>
          <View style={styles.settingsView}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileMenu')} style={styles.settingsViewIcons}>
              <SvgComponentEclips />
            </TouchableOpacity>

          </View>
          <View style={styles.accountInfo}>
            <View style={styles.accountAvatar}>
              {userInfo.avatar ? (
                <Image
                  style={styles.accountAvatar}
                  source={{ uri: `http://192.168.31.101:4000${userInfo.avatar}` }}
                />
              )

                : <SvgComponentDefaultImage /> }
            </View>
            <View style={styles.accountUserInfo}>
              <Text style={styles.accountUserName}>
                {userInfo.firstName}
                {' '}
                {userInfo.lastName}
              </Text>
              <View style={styles.locationView}>
                <SvgComponentLocationIcon />
                {userInfo.country ? (
                  <Text style={styles.accountUserLocationVisit}>
                    {userInfo.country}
                    {' '}
                    {userInfo.city ? userInfo.city : null}
                  </Text>
                ) : null}
              </View>
              <Text style={styles.accountUserLocationVisit}>11:34 am Local Time</Text>
            </View>
          </View>
          <View style={styles.specialInfo}>
            {cvInfo?.experience ? (
              <View style={styles.specialInfoMarginBox}>
                <Text style={styles.specialInfoTitle}>{cvInfo.experience}</Text>
                <Text style={styles.specialInfoText}>Specialized In</Text>
              </View>
            ) : null}
            {cvInfo.bio ? (
              <View>
                <Text style={styles.bioText}>{cvInfo.bio}</Text>
              </View>
            ) : null}
            <Text style={styles.specialInfoTitleMargin}>Expert</Text>
            <Text style={styles.specialInfoTitleMargin}>Skills</Text>
            {cvInfo?.skills ? (
              <View style={styles.skills}>
                {cvInfo?.skills.map((e) => (
                  <View key={e.id} style={styles.skillBox}>
                    <Text style={styles.skillText}>{e.skill}</Text>
                    <TouchableOpacity style={styles.skillDelete}>
                      <Text>X</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : null}
            <Text style={styles.specialInfoTitleMargin}>Education</Text>
            {cvInfo?.school ? (
              <View style={styles.skills}>
                <View style={styles.skillBox}>
                  <Text style={styles.skillText}>
                    {cvInfo.school}
                    {cvInfo.degree ? ` - ${cvInfo.degree}` : null}
                  </Text>
                </View>
              </View>
            ) : null}
            <Text style={styles.specialInfoTitleMargin}>Languages</Text>
            {cvInfo?.language ? (
              <View style={styles.skills}>
                {cvInfo?.language.map((e) => (
                  <View key={e.id} style={styles.skillBox}>
                    <Text style={styles.skillText}>
                      {e.language}
                      {' '}
                      {e.level.value ?? e.level}
                    </Text>
                    <TouchableOpacity style={styles.skillDelete}>
                      <Text>X</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('profileEditModal')} style={styles.editBtn}>
            <Text style={styles.editBtnText}>Edit profile</Text>
          </TouchableOpacity>
          <View style={styles.btnsBox}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Delete account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profile: {
    paddingTop: StatusBar.currentHeight + 10,
    position: 'relative',
    backgroundColor: WHITE,
    minHeight: '100%',
  },
  settingsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  settingsViewIcons: {
    width: '5%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    width: '90%',
    // height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  profileRow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBox: {
    backgroundColor: LIGHT_GREY,
    marginRight: 5,
    borderRadius: 25,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillText: {
    color: 'rgba(0, 0, 0, 0.50)',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  bioText: {
    color: 'rgba(0, 0, 0, 0.50)',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    // paddingVertical: 5,
    // paddingHorizontal: 10,
  },
  skillDelete: {
    backgroundColor: 'red',
    width: RW(20),
    height: RH(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: RW(5),
  },
  accountInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  accountAvatar: {
    width: RW(70),
    height: RH(70),
    backgroundColor: 'grey',
    borderRadius: 50,
    overflow: 'hidden',
  },
  accountUserInfo: {
    marginLeft: 10,
  },
  accountUserName: {
    color: '#031054',
    fontFamily: 'Lato-Bold',
    fontSize: RW(20),
    marginBottom: 5,
  },
  accountUserLocationVisit: {
    color: INDIGO_BLUE,
    fontFamily: 'Lato-Bold',
    fontSize: 12,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specialInfo: {
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: RH(30),
    marginBottom: RH(70),
  },
  specialInfoBox: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  specialInfoTitle: {
    color: BLACK,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
  },
  specialInfoText: {
    color: 'rgba(3, 16, 84, 0.50)',
    fontFamily: 'Lato-Semi-Bold',
    fontSize: 10,
    position: 'absolute',
    top: 20,
  },
  specialInfoMarginBox: {
    position: 'relative',
    marginBottom: 15,
  },
  specialInfoMarginBoxTwo: {
    marginBottom: 15,
  },
  specialInfoSpecializations: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  specialInfoTitleMargin: {
    color: BLACK,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginBottom: 15,
  },
  editBtn: {
    width: '100%',
    height: RH(37),
    backgroundColor: ORANGE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: RH(100),
  },
  editBtnText: {
    fontFamily: 'Lato-Regular',
    color: WHITE,
    fontSize: 14,
  },
  btn: {
    width: '50%',
    // height: RH(37),
    // backgroundColor: ORANGE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 15,
  },
  btnText: {
    fontFamily: 'Lato-Regular',
    color: BLACK,
    fontSize: 14,
  },
  btnsBox: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 'auto',
  },
});

export default Profile;
