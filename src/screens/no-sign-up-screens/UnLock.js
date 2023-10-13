import React from 'react';
import {
  StatusBar, StyleSheet, Text, View,
} from 'react-native';
import SlideToUnlock from '../../components/no-sign-up-screens-components/unlcokScreenComponents/SlideToUnlock';
import LogoView from '../../components/global/LogoView';
import { INDIGO_BLUE, WHITE } from '../../theme/colors';
import SvgComponentMainImage from '../../components/imagesSvgComponents/SvgComponentMainImage';

function UnLock() {
  console.log(StatusBar.currentHeight);
  return (
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
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: INDIGO_BLUE,
    paddingTop: StatusBar.currentHeight || 0,
  },
  text: {
    textAlign: 'left',
    color: WHITE,
    fontFamily: 'Lato,sans-serif',
    fontSize: 42,
    fontStyle: 'normal',
    fontWeight: '800',
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
