import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import MapView from 'react-native-maps';
import SvgComponentAvatar from '../components/imagesSvgComponents/SvgComponentAvatar';
import { DARK_BLUE, INDIGO_BLUE, WHITE } from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import SvgComponentSearchIcon from '../components/imagesSvgComponents/SvgComponentSearchIcon';
import SvgComponentFilterIcon from '../components/imagesSvgComponents/SvgComponentFilterIcon';

function Main() {
  const [activeComponent, setActiveComponent] = useState('map');
  const [openFilterModal, setOpenFilterModal] = useState(false);

  return (
    <>
      <View style={styles.main}>
        <View style={styles.main__top}>
          <View style={styles.main__top__block}>
            <TouchableOpacity
              style={{
                width: '60%', padding: 8, backgroundColor: activeComponent === 'map' ? INDIGO_BLUE : '#D9D9D9', borderRadius: 22, zIndex: activeComponent === 'map' ? 1 : 0,
              }}
              onPress={() => setActiveComponent('map')}
            >
              <Text style={{
                color: activeComponent === 'map' ? WHITE : DARK_BLUE, textAlign: 'center', fontSize: RW(14), fontFamily: 'Lato-Regular',
              }}
              >
                Map
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '60%', padding: 8, backgroundColor: activeComponent === 'filter' ? INDIGO_BLUE : '#D9D9D9', borderRadius: 22, marginLeft: '-10%',
              }}
              onPress={() => setActiveComponent('filter')}
            >
              <Text style={{
                color: activeComponent === 'filter' ? WHITE : DARK_BLUE, textAlign: 'center', fontSize: RW(14), fontFamily: 'Lato-Regular',
              }}
              >
                List
              </Text>
            </TouchableOpacity>
          </View>
          <SvgComponentAvatar />
        </View>
        <View style={styles.main__content}>
          {activeComponent === 'map' ? (
            <View style={styles.main__map}>
              <View style={styles.map__input__block}>
                <SvgComponentSearchIcon style={styles.map__input__icon} />
                <TextInput placeholder="Location" style={styles.map__input} />
              </View>
              <View style={styles.main__map__block}>
                <MapView
                  initialRegion={{
                    latitude: 40.0706185,
                    longitude: 45.0407411,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
            </View>
          ) : (
            <View style={styles.main__filter}>
              <TouchableOpacity onPress={() => setOpenFilterModal(true)}>
                <SvgComponentFilterIcon />
              </TouchableOpacity>
              <ScrollView style={styles.main__filter__content}>
                <View style={{
                  width: '100%', position: 'relative', padding: 15, flexDirection: 'column', backgroundColor: '#D9D9D9', borderRadius: 22, marginBottom: 20,
                }}
                >
                  <Text style={{
                    fontFamily: 'Lato-Regular', fontSize: RW(16), color: DARK_BLUE, marginBottom: 10,
                  }}
                  >
                    I’m Looking For a lady Who Will Clean My balcony
                  </Text>
                  <View>
                    <Text>Hourly:</Text>
                    <Text>4000 AMD</Text>
                  </View>
                  <View>
                    <Text>Location:</Text>
                    <Text>Armenia/Yerevan</Text>
                  </View>
                  <TouchableOpacity style={{
                    width: '100%', padding: 10, backgroundColor: INDIGO_BLUE, borderRadius: 100, marginTop: 15,
                  }}
                  >
                    <Text style={{ fontFamily: 'Lato-Regular', color: WHITE, textAlign: 'center' }}>Send a Request</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                  width: '100%', position: 'relative', padding: 15, flexDirection: 'column', backgroundColor: '#D9D9D9', borderRadius: 22, marginBottom: 20,
                }}
                >
                  <Text style={{
                    fontFamily: 'Lato-Regular', fontSize: RW(16), color: DARK_BLUE, marginBottom: 10,
                  }}
                  >
                    I’m Looking For a lady Who Will Clean My balcony
                  </Text>
                  <View>
                    <Text>Hourly:</Text>
                    <Text>4000 AMD</Text>
                  </View>
                  <View>
                    <Text>Location:</Text>
                    <Text>Armenia/Yerevan</Text>
                  </View>
                  <TouchableOpacity style={{
                    width: '100%', padding: 10, backgroundColor: INDIGO_BLUE, borderRadius: 100, marginTop: 15,
                  }}
                  >
                    <Text style={{ fontFamily: 'Lato-Regular', color: WHITE, textAlign: 'center' }}>Send a Request</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                  width: '100%', position: 'relative', padding: 15, flexDirection: 'column', backgroundColor: '#D9D9D9', borderRadius: 22, marginBottom: 20,
                }}
                >
                  <Text style={{
                    fontFamily: 'Lato-Regular', fontSize: RW(16), color: DARK_BLUE, marginBottom: 10,
                  }}
                  >
                    I’m Looking For a lady Who Will Clean My balcony
                  </Text>
                  <View>
                    <Text>Hourly:</Text>
                    <Text>4000 AMD</Text>
                  </View>
                  <View>
                    <Text>Location:</Text>
                    <Text>Armenia/Yerevan</Text>
                  </View>
                  <TouchableOpacity style={{
                    width: '100%', padding: 10, backgroundColor: INDIGO_BLUE, borderRadius: 100, marginTop: 15,
                  }}
                  >
                    <Text style={{ fontFamily: 'Lato-Regular', color: WHITE, textAlign: 'center' }}>Send a Request</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                  width: '100%', position: 'relative', padding: 15, flexDirection: 'column', backgroundColor: '#D9D9D9', borderRadius: 22,
                }}
                >
                  <Text style={{
                    fontFamily: 'Lato-Regular', fontSize: RW(16), color: DARK_BLUE, marginBottom: 10,
                  }}
                  >
                    I’m Looking For a lady Who Will Clean My balcony
                  </Text>
                  <View>
                    <Text>Hourly:</Text>
                    <Text>4000 AMD</Text>
                  </View>
                  <View>
                    <Text>Location:</Text>
                    <Text>Armenia/Yerevan</Text>
                  </View>
                  <TouchableOpacity style={{
                    width: '100%', padding: 10, backgroundColor: INDIGO_BLUE, borderRadius: 100, marginTop: 15,
                  }}
                  >
                    <Text style={{ fontFamily: 'Lato-Regular', color: WHITE, textAlign: 'center' }}>Send a Request</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          ) }
        </View>
      </View>
      {openFilterModal ? (
        <View style={styles.main__modal}>
          <TouchableOpacity
            style={styles.main__modal__close}
            onPress={() => setOpenFilterModal(false)}
          >
            <Text style={{ fontSize: RW(24), color: '#fff' }}>X</Text>
          </TouchableOpacity>
          <View>
            <Text>Experience level</Text>
          </View>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: WHITE,
    paddingTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
  main__top: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RH(15),
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  main__top__block: {
    width: RW(170),
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: 22,
  },
  main__content: {
    width: '100%',
    position: 'relative',
    marginTop: RH(20),
  },
  map__input__block: {
    width: '100%',
    position: 'relative',
    marginTop: RH(20),
  },
  map__input__icon: {
    position: 'absolute',
    left: 20,
    top: RH(17),
    zIndex: 1,
  },
  map__input: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#EDECEC',
    paddingLeft: 40,
    paddingRight: 20,
    height: RH(50),
  },
  main__map: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  main__map__block: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  main__filter: {
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    marginTop: RH(5),
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  main__filter__content: {
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: '#EDECEC',
    padding: 20,
    marginTop: 12,
  },
  main__modal: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: INDIGO_BLUE,
  },
  main__modal__close: {
    position: 'absolute',
    right: RW(30),
    top: RH(60),
  },
});

export default Main;
