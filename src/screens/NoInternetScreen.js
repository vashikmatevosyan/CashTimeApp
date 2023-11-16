import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { BLACK, INDIGO_BLUE, ORANGE } from '../theme/colors';
import LogoView from '../components/global/LogoView';

function NoInternetScreen({ onRetry }) {
  return (
    <View style={
      { paddingTop: StatusBar.currentHeight + 10, flex: 1, backgroundColor: INDIGO_BLUE }
}
    >
      <LogoView />
      <View style={styles.container}>
        <Icon name="wifi-off" type="feather" size={200} color={ORANGE} />
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>
            No internet connection
          </Text>
          <Icon name="mood-bad" type="material" size={40} color="#000" />
        </View>
        <Button mode="contained" onPress={onRetry} style={styles.button}>
          To retry
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
    color: BLACK,
  },
  button: {
    marginTop: 20,
    backgroundColor: ORANGE,
  },
});

export default NoInternetScreen;
