import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, ScrollView, Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RH, RW } from '../../helpers/ratio';
import {
  BLACK, DARK_BLUE, LIGHT_GREY, ORANGE, WHITE,
} from '../../theme/colors';
import SvgComponentsJobFinallyFirst from '../imagesSvgComponents/SvgComponentsJobFinallyFirst';
import SvgComponentsJobFinallySecond from '../imagesSvgComponents/SvgComponentsJobFinallySecond';
import SvgComponentsJobFinallyThird from '../imagesSvgComponents/SvgComponentsJobFinallyThird';
import SvgComponentDefaultImage from '../imagesSvgComponents/SvgComponentDefaultImage';
import SvgComponentPain from '../imagesSvgComponents/SvgComponentPain';
import CreateJobsTitles from './CreateJobsTitles';
import { createJobRequestFromPending } from '../../store/actions/jobsRequest';

function FinallyView({ getBack, file }) {
  const dispatch = useDispatch();
  const dataFromChild1 = useSelector((state) => state.createJobForm.dataFromChild1);
  const dataFromChild2 = useSelector((state) => state.createJobForm.dataFromChild2);
  const dataFromChild3 = useSelector((state) => state.createJobForm.dataFromChild3);
  const selectedMethod = useSelector((state) => state.createJobForm.dataFromChild4.method);
  const priceFrom = useSelector((state) => state.createJobForm.dataFromChild4.priceFrom);
  const priceTo = useSelector((state) => state.createJobForm.dataFromChild4.priceTo);
  const maxPrice = useSelector((state) => state.createJobForm.dataFromChild4.maxPrice);
  const dataFromChild5 = useSelector((state) => state.createJobForm.dataFromChild5);
  const fileSrc = useSelector((state) => state.createJobForm.dataFromChild6.selectedPhoto);
  const address = useSelector((state) => state.createJobForm.dataFromChild6.address);
  const phoneNumber = useSelector((state) => state.createJobForm.dataFromChild6.phoneNumber);
  const [dataForRequest, setDataForRequest] = useState({});
  const dataForUpdate = useSelector((state) => state.createJobForm);
  useEffect(() => {
    setDataForRequest({ ...dataForUpdate, file });
  }, [dataForUpdate, file]);
  console.log(file);
  const handlePostJob = useCallback(async () => {
    const formData = new FormData();
    formData.append('jobImage', {
      uri: file.uri,
      type: file.type,
      name: file.fileName,
    });
    formData.append('data', JSON.stringify(dataForRequest));

    const { payload } = await dispatch(createJobRequestFromPending(formData));
    console.log(payload);
  }, [dataForRequest, file]);

  const getPriceRange = () => {
    if (priceFrom && priceTo) {
      return `${priceFrom}$-${priceTo}$`;
    } if (priceFrom) {
      return `${priceFrom}$`;
    }
    return '';
  };
  return (
    <>
      <View style={styles.imageFirst}>
        <SvgComponentsJobFinallyFirst />
      </View>
      <View style={styles.imageSecond}>
        <SvgComponentsJobFinallySecond />
      </View>
      <View style={styles.imageThird}>
        <SvgComponentsJobFinallyThird />
      </View>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.finallyRow}>
            <View style={styles.imageBlock}>
              {!file.uri ? <SvgComponentDefaultImage /> : <Image source={{ uri: file.uri }} />}
            </View>
            <TouchableOpacity onPress={() => getBack()}>
              <SvgComponentPain />
            </TouchableOpacity>
          </View>
          {dataFromChild1
            && <Text style={[styles.titles, { marginTop: 15 }]}>{dataFromChild1}</Text>}
          <Text style={[styles.titles, { marginTop: 15 }]}>Skills</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {dataFromChild2.map((e) => (
              <View key={e.id} style={styles.skillBox}>
                <Text style={styles.skillText}>{e.skill}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: RH(15) }}>
            <Text style={styles.titles}>Scope</Text>
            <Text style={[styles.skillText, { paddingHorizontal: 0, fontSize: 16 }]}>
              {dataFromChild3}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.titles}>Bio</Text>
            {dataFromChild5 && (
            <Text style={[styles.skillText, { paddingHorizontal: 0, fontSize: 16 }]}>
              {dataFromChild5}
            </Text>
            )}
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.titles}>{selectedMethod}</Text>
            {maxPrice || priceFrom || priceTo ? (
              <Text style={[styles.skillText, { paddingHorizontal: 0, fontSize: 16 }]}>
                {maxPrice ? `${maxPrice}$` : getPriceRange()}
              </Text>
            ) : null}
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.titles}>Location</Text>
            {address.country || address.city ? (
              <Text style={[styles.skillText, { paddingHorizontal: 0, fontSize: 16 }]}>
                {`${address.country}${address.city}`}
              </Text>
            ) : null}
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.titles}>Address</Text>
            {address.fullAddress ? (
              <Text style={[styles.skillText, { paddingHorizontal: 0, fontSize: 16 }]}>
                {address.fullAddress}
              </Text>
            ) : null}
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.titles}>Phone Number</Text>
            {phoneNumber ? (
              <Text style={[styles.skillText, { paddingHorizontal: 0, fontSize: 16 }]}>
                {phoneNumber}
              </Text>
            ) : null}
          </View>
        </ScrollView>
        <TouchableOpacity onPress={handlePostJob} style={styles.btn}>
          <CreateJobsTitles width="100%" title="Post This Job" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageFirst: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    top: 10,
  },
  imageSecond: {
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: -1,
  },
  imageThird: {
    position: 'absolute',
    left: 0,
    bottom: 10,
    zIndex: -1,
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    marginTop: RH(40),
    width: '95%',
    position: 'relative',
  },
  content: {
    backgroundColor: WHITE,
    borderRadius: 25,
    padding: 10,
  },
  finallyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBlock: {
    width: RW(100),
    height: RH(100),
    backgroundColor: ORANGE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: DARK_BLUE,
    paddingVertical: 15,
    borderRadius: 25,
  },
  titles: {
    color: BLACK,
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    // marginTop: 15,
  },
  skillBox: {
    backgroundColor: LIGHT_GREY,
    marginRight: 5,
    borderRadius: 25,
    marginTop: 10,
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
});

export default FinallyView;
