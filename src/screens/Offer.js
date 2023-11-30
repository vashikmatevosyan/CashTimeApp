import React, { useEffect } from 'react';
import {
  Image,
  ScrollView,
  StatusBar, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import SvgComponentAvatar from '../components/imagesSvgComponents/SvgComponentAvatar';
import {
  BLACK, INDIGO_BLUE, ORANGE, WHITE,
} from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import { noticeList } from '../store/actions/notice';

function Offer({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(noticeList({ page: 1, limit: 10 }));
  }, []);
  const noticesList = useSelector((state) => state.notices.notices) || [];
  console.log(noticesList);
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
          {noticesList.map((e) => (
            <View key={e.id} style={styles.offer__block}>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 24, color: WHITE }}>{e['fromJob.title']}</Text>
                <View>
                  <Image
                    style={{ width: 58, height: 58, borderRadius: 58 }}
                    source={{ uri: `http://192.168.31.139:4000${e['userFrom.avatar']}` }}
                    alt="user"
                  />
                  <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14, color: WHITE }}>{`${e['userFrom.firstName']} ${e['userFrom.lastName']}`}</Text>
                </View>
              </View>
              <View>
                <Text style={{
                  fontFamily: 'Lato-Bold', fontSize: 14, color: WHITE, marginBottom: 5,
                }}
                >
                  {moment(e.createdAt).format('YYYY-MM-DD HH:mm')}
                </Text>
                {e['userFrom.city'] && e['userFrom.country'] ? (
                  <Text style={{
                    fontFamily: 'Lato-Bold', fontSize: 14, color: WHITE, marginBottom: 25,
                  }}
                  >
                    {e['userFrom.city']}
                    {e['userFrom.country']}
                  </Text>
                ) : null}
                {/* <Text style={{ */}
                {/*   fontFamily: 'Lato-Bold', fontSize: 20, color: '#fff', marginBottom: 5, */}
                {/* }} */}
                {/* > */}
                {/*   4000 AMD */}
                {/* </Text> */}
              </View>
              <View>
                <TouchableOpacity style={{
                  width: '100%', border: '1px solid #E17A01', backgroundColor: ORANGE, padding: 10, borderRadius: 108, marginTop: 50,
                }}
                >
                  <Text style={{ fontFamily: 'Roboto-Regular', color: WHITE, textAlign: 'center' }}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  width: '100%', borderColor: WHITE, borderStyle: 'solid', borderWidth: 1, backgroundColor: 'transparent', padding: 10, borderRadius: 108, marginTop: 10,
                }}
                >
                  <Text style={{ fontFamily: 'Roboto-Regular', color: WHITE, textAlign: 'center' }}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
