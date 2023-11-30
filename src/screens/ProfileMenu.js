import React from 'react';
import {
  View, Text, StyleSheet, StatusBar, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { INDIGO_BLUE, WHITE } from '../theme/colors';
import LogoView from '../components/global/LogoView';
import { RH, RW } from '../helpers/ratio';
import SvgComponentCloseBtn from '../components/imagesSvgComponents/SvgComponentCloseBtn';
import SvgComponentPhone from '../components/imagesSvgComponents/SvgComponentPhone';
import SvgComponentSettingIcon from '../components/imagesSvgComponents/SvgComponentSettingIcon';
import SvgComponentSwitchAccountIcon
  from '../components/imagesSvgComponents/SvgComponentSwitchAccountIcon';
import SvgComponentHistory from '../components/imagesSvgComponents/SvgComponentHistory';
import SvgComponentDelete from '../components/imagesSvgComponents/SvgComponentDelete';
import SvgComponentLogOut from '../components/imagesSvgComponents/SvgComponentLogOut';

function ProfileMenu(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.profileMenu}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
              <LogoView />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <SvgComponentCloseBtn />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: RH(40) }}>
            <TouchableOpacity style={styles.profileMenuInfoBox}>
              <SvgComponentPhone />
              <Text style={styles.profileMenuInfoText}>Call Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileMenuInfoBox}>
              <SvgComponentSettingIcon />
              <Text style={styles.profileMenuInfoText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileMenuInfoBox}>
              <SvgComponentSwitchAccountIcon />
              <Text style={styles.profileMenuInfoText}>Switch Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileMenuInfoBox}>
              <SvgComponentHistory />
              <Text style={styles.profileMenuInfoText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileMenuInfoBox}>
              <SvgComponentDelete />
              <Text style={styles.profileMenuInfoText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.profileMenuLogOut}>
            <SvgComponentLogOut />
            <Text style={styles.profileMenuInfoText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileMenu: {
    paddingTop: StatusBar.currentHeight + 10,
    position: 'relative',
    backgroundColor: INDIGO_BLUE,
    minHeight: '100%',
  },
  container: {
    width: '90%',
    // height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  row: {
    position: 'relative',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: RH(45),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileMenuInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RH(20),

  },
  profileMenuInfoText: {
    color: WHITE,
    fontFamily: 'Lato-Regular',
    fontSize: 17,
    marginLeft: RW(20),
  },
  profileMenuLogOut: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: RH(20),
    marginTop: 'auto',
  },
});
export default ProfileMenu;
