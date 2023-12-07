import React from 'react';
import {
  ScrollView, View, StyleSheet, Text,
} from 'react-native';
import SvgComponentVerified from '../../components/imagesSvgComponents/SvgComponentVerified';
import { BLACK, INDIGO_BLUE, WHITE } from '../../theme/colors';
import { RH, RW } from '../../helpers/ratio';

function Verified() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
      <View style={styles.verified}>

        <View style={styles.verifyBlock}>
          <View>
            <SvgComponentVerified />
          </View>

          <Text style={styles.verifiedText}>
            Verified!
          </Text>

          <Text style={styles.verifiedInfo}>
            You Have successfully Verified Your account
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  verifiedText: {
    fontFamily: 'Lato-Semi Bold',
    color: INDIGO_BLUE,
    fontSize: 24,
    fontWeight: '800',
    marginTop: 5,
  },
  verifiedInfo: {
    fontFamily: 'Lato-Semi Bold',
    color: BLACK,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
    textAlign: 'center',
  },
  verified: {
    backgroundColor: INDIGO_BLUE,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    // paddingHorizontal: 40,
  },
  verifyBlock: {
    width: RW(320),
    height: RH(320),
    backgroundColor: WHITE,
    paddingHorizontal: 40,
    borderRadius: 80,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  // verifiedImage: {
  // },
});

export default Verified;
