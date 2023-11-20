import React from 'react';
import {
  StyleSheet, View, Text, StatusBar, TouchableOpacity, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  BLACK, INDIGO_BLUE, ORANGE, WHITE,
} from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import SvgComponentEclips from '../components/imagesSvgComponents/SvgComponentEclips';
import SvgComponentDefaultImage from '../components/imagesSvgComponents/SvgComponentDefaultImage';
import SvgComponentLocationIcon from '../components/imagesSvgComponents/SvgComponentLocationIcon';
// import SvgComponentEditIcon from '../components/imagesSvgComponents/SvgComponentEditIcon';
// import SvgComponentPriceIcon from '../components/imagesSvgComponents/SvgComponentPriceIcon';

function Profile() {
  const navigation = useNavigation();
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
              <SvgComponentDefaultImage />
            </View>
            <View style={styles.accountUserInfo}>
              <Text style={styles.accountUserName}>Amanelia M.</Text>
              <View style={styles.locationView}>
                <SvgComponentLocationIcon />
                <Text style={styles.accountUserLocationVisit}>
                  Yerevan, Armenia
                </Text>
              </View>
              <Text style={styles.accountUserLocationVisit}>11:34 am Local Time</Text>
            </View>
          </View>
          <View style={styles.specialInfo}>
            <View style={styles.specialInfoMarginBox}>
              <Text style={styles.specialInfoTitle}>Baby Sitter</Text>
              <Text style={styles.specialInfoText}>Specialized In</Text>
            </View>
            <Text style={styles.specialInfoTitleMargin}>9000 AMD Hourly</Text>
            <Text style={styles.specialInfoTitleMargin}>Expert</Text>
            <Text style={styles.specialInfoTitleMargin}>Skills</Text>
            <Text style={styles.specialInfoTitleMargin}>Education</Text>
            <Text style={styles.specialInfoTitleMargin}>Languages</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')} style={styles.editBtn}>
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
    fontSize: 20,
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
