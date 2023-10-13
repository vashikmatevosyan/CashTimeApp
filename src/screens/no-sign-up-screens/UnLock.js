import React from 'react';
import {
  StatusBar, StyleSheet, Text, View,
} from 'react-native';
import SlideToUnlock from '../../components/no-sign-up-screens-components/unlcokScreenComponents/SlideToUnlock';
import LogoView from '../../components/global/LogoView';
import { INDIGO_BLUE, WHITE } from '../../theme/colors';
import SvgComponentMainImage from '../../components/imagesSvgComponents/SvgComponentMainImage';
import { RW } from '../../helpers/ratio';

function UnLock() {
  return (
    <View style={styles.unLock}>
      <View style={styles.container}>
        <LogoView />
        <View style={styles.imagesContainer}>
          <SvgComponentMainImage />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Welcome To CashApp
          </Text>
        </View>
        <SlideToUnlock />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  unLock: {
    flex: 1,
    backgroundColor: INDIGO_BLUE,
    paddingTop: StatusBar.currentHeight || 0,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around',
    flex: 1,
  },
  text: {
    textAlign: 'left',
    color: WHITE,
    fontFamily: 'Lato-Bold',
    fontSize: RW(42),
    fontStyle: 'normal',
  },
  textContainer: {
    width: '95%',
    flex: 2,
    justifyContent: 'flex-end',
  },
  imagesContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
export default UnLock;
