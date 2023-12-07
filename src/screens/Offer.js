import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import SvgComponentAvatar from '../components/imagesSvgComponents/SvgComponentAvatar';
import {
  BLACK, INDIGO_BLUE, ORANGE, WHITE,
} from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import avatarImage from '../../assets/images/avatar.png';

function Offer({ navigation }) {
  return (
    <View style={styles.offer}>
      <View style={styles.container}>
        <View style={styles.offer__top}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.offer__top__button}>
              Back
            </Text>
          </TouchableOpacity>
          <Text style={styles.offer__top__text}>
            Offer
          </Text>
          <SvgComponentAvatar />
        </View>
        <ScrollView style={styles.offer__content}>
          <View style={styles.offer__block}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 24, color: '#fff' }}>House Cleaning</Text>
              <View>
                <Image
                  style={{ width: 58, height: 58, borderRadius: 58 }}
                  source={avatarImage}
                  alt=""
                />
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14, color: '#fff' }}>Monica Jess</Text>
              </View>
            </View>
            <View>
              <Text style={{
                fontFamily: 'Lato-Bold', fontSize: 14, color: '#fff', marginBottom: 5,
              }}
              >
                12:00-13:00
              </Text>
              <Text style={{
                fontFamily: 'Lato-Bold', fontSize: 14, color: '#fff', marginBottom: 25,
              }}
              >
                Gyumri, Armenia
              </Text>
              <Text style={{
                fontFamily: 'Lato-Bold', fontSize: 20, color: '#fff', marginBottom: 5,
              }}
              >
                4000 AMD
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{
                width: '100%', border: '1px solid #E17A01', backgroundColor: ORANGE, padding: 10, borderRadius: 108, marginTop: 50,
              }}
              >
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff', textAlign: 'center' }}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                width: '100%', borderColor: '#fff', borderStyle: 'solid', borderWidth: 1, backgroundColor: 'transparent', padding: 10, borderRadius: 108, marginTop: 10,
              }}
              >
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff', textAlign: 'center' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.offer__block}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 24, color: '#fff' }}>House Cleaning</Text>
              <View>
                <Image
                  style={{ width: 58, height: 58, borderRadius: 58 }}
                  source={avatarImage}
                  alt=""
                />
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14, color: '#fff' }}>Monica Jess</Text>
              </View>
            </View>
            <View>
              <Text style={{
                fontFamily: 'Lato-Bold', fontSize: 14, color: '#fff', marginBottom: 5,
              }}
              >
                12:00-13:00
              </Text>
              <Text style={{
                fontFamily: 'Lato-Bold', fontSize: 14, color: '#fff', marginBottom: 25,
              }}
              >
                Gyumri, Armenia
              </Text>
              <Text style={{
                fontFamily: 'Lato-Bold', fontSize: 20, color: '#fff', marginBottom: 5,
              }}
              >
                4000 AMD
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{
                width: '100%', border: '1px solid #E17A01', backgroundColor: ORANGE, padding: 10, borderRadius: 108, marginTop: 50,
              }}
              >
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff', textAlign: 'center' }}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                width: '100%', borderColor: '#fff', borderStyle: 'solid', borderWidth: 1, backgroundColor: 'transparent', padding: 10, borderRadius: 108, marginTop: 10,
              }}
              >
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff', textAlign: 'center' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.offer__block}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 24, color: '#fff' }}>House Cleaning</Text>
              <View>
                <Image
                  style={{ width: 58, height: 58, borderRadius: 58 }}
                  source={avatarImage}
                  alt=""
                />
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14, color: '#fff' }}>Monica Jess</Text>
              </View>
            </View>
            <View>
              <Text style={{
                fontFamily: 'Lato-Bold', fontSize: 14, color: '#fff', marginBottom: 5,
              }}
              >
                12:00-13:00
              </Text>
              <Text style={{
                fontFamily: 'Lato-Bold', fontSize: 14, color: '#fff', marginBottom: 25,
              }}
              >
                Gyumri, Armenia
              </Text>
              <Text style={{
                fontFamily: 'Lato-Bold', fontSize: 20, color: '#fff', marginBottom: 5,
              }}
              >
                4000 AMD
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{
                width: '100%', border: '1px solid #E17A01', backgroundColor: ORANGE, padding: 10, borderRadius: 108, marginTop: 50,
              }}
              >
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff', textAlign: 'center' }}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                width: '100%', borderColor: '#fff', borderStyle: 'solid', borderWidth: 1, backgroundColor: 'transparent', padding: 10, borderRadius: 108, marginTop: 10,
              }}
              >
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff', textAlign: 'center' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  offer: {
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
  offer__top: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offer__top__button: {
    color: INDIGO_BLUE,
    fontFamily: 'Lato-Regular',
    fontSize: RW(17),
  },
  offer__top__text: {
    color: BLACK,
    fontFamily: 'Lato-Bold',
    fontSize: RW(20),
  },
  offer__content: {
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    marginTop: RH(30),
  },
  offer__block: {
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: INDIGO_BLUE,
    borderRadius: 22,
    padding: RH(15),
    marginBottom: RH(20),
  },
});

export default Offer;
