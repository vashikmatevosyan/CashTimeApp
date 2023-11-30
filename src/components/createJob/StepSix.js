import React, {
  useCallback, useEffect, useState,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { SelectList } from 'react-native-dropdown-select-list';
import PhoneInput from 'react-native-phone-number-input';
import { useSelector } from 'react-redux';
import { RH, RW } from '../../helpers/ratio';
import { GREY, ORANGE, WHITE } from '../../theme/colors';
import SvgComponentDefaultImage from '../imagesSvgComponents/SvgComponentDefaultImage';
import SmallTextsCreateJob from './SmallTextsCreateJob';
import SvgComponentArrowSelect from '../imagesSvgComponents/SvgComponentArrowSelect';
import AddressAutocomplete from '../global/AddressAutocomplete';

function StepSix({ countries, onData, file: image }) {
  const sixtyFormObj = useSelector((state) => state.createJobForm.dataFromChild6) ?? {};
  const [file, setFile] = useState(image || {});
  const [selectedImageUri, setSelectedImageUri] = useState(sixtyFormObj.selectedPhoto || '');
  const [selectCountry, setSelectCountry] = useState(sixtyFormObj.selectCountry || '');
  const [code, setCode] = useState('AM');
  const [address, setAddress] = useState({
    latitude: sixtyFormObj.address.latitude || '',
    longitude: sixtyFormObj.address.longitude || '',
    fullAddress: sixtyFormObj.address.fullAddress || '',
    country: sixtyFormObj.address.country || '',
    city: sixtyFormObj.address.city || '',
  });
  const [phoneNumber, setPhoneNumber] = useState(sixtyFormObj.phoneNumber || '');
  const [value, setValue] = useState(sixtyFormObj.phoneNumberValue || '');

  const handleGallery = useCallback(() => {
    const options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, (response) => {
      setFile(response.assets[0]);
      if (response?.assets) {
        setSelectedImageUri(response?.assets[0]?.uri);
      }
    });
  }, [file, selectedImageUri]);
  useEffect(() => {
    onData({
      dataFromChild6: {
        selectCountry,
        address,
        selectedPhoto: selectedImageUri,
        phoneNumber,
        phoneNumberValue: value,
      },
    }, file);
  }, [selectCountry, address, file, phoneNumber, selectedImageUri]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageBlock}>
          {file.uri ? (
            <Image
              source={{ uri: file.uri }}
              style={styles.image}
            />
          ) : <SvgComponentDefaultImage />}
        </View>
        <TouchableOpacity onPress={handleGallery} style={styles.uploadTextBlock}>
          <Text style={styles.uploadText}>+</Text>
          <Text style={styles.uploadText}>Upload a Picture</Text>
        </TouchableOpacity>
        <View style={styles.selectBlock}>
          <SmallTextsCreateJob text="Country*" />
          <SelectList
            defaultOption={{ key: selectCountry, value: selectCountry }}
            arrowicon={<SvgComponentArrowSelect />}
            boxStyles={styles.select}
            setSelected={(label) => {
              setSelectCountry(label);
              setCode(countries.filter((e) => e.value === label)[0]?.label);
            }}
            data={countries}
            renderItem={({ item }) => <Text>{item.label}</Text>}
            placeholder="Select Country"
            save="value"
            searchPlaceholder="Search Country"
            notFoundText="Country Not Found"
          />
        </View>
        <View style={{ marginTop: RH(15) }}>
          <SmallTextsCreateJob text="Street Address* (won’t show on profile)" />
          <AddressAutocomplete
            defaultValue={sixtyFormObj.address.fullAddress || ''}
            setAddress={setAddress}
            height={100}
            code={code}
            marginTop={10}
            bg={GREY}
            radius={10}
          />
        </View>
        <View style={{ marginTop: RH(10) }}>
          <SmallTextsCreateJob text="Phone" />
          <View style={{ height: 50 }}>
            <PhoneInput
              value={value}
              onChangeText={setValue}
              onChangeFormattedText={setPhoneNumber}
              defaultCode="AM"
              codeTextStyle={styles.inputText}
              flagButtonStyle={{ padding: 0, margin: 0 }}
              textInputStyle={styles.inputText}
              textContainerStyle={{ borderRadius: 20, height: 50, backgroundColor: GREY }}
              containerStyle={{ backgroundColor: GREY, borderRadius: 10 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(15),
    width: '95%',
    position: 'relative',
    flex: 1,
  },
  content: {
    backgroundColor: WHITE,
    borderRadius: 25,
    padding: 10,
  },
  imageBlock: {
    width: RW(100),
    height: RH(100),
    backgroundColor: ORANGE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadTextBlock: {
    flexDirection: 'row',
    width: '50%',
    paddingHorizontal: 10,
    borderRadius: 50,
    justifyContent: 'space-around',
    paddingVertical: 12,
    marginTop: 12,
    backgroundColor: ORANGE,
  },
  uploadText: {
    color: WHITE,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    fontStyle: 'normal',
    letterSpacing: 0.1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  select: {
    backgroundColor: GREY,
    marginTop: RH(5),
    borderWidth: 0,
    height: 50,
    alignItems: 'center',
  },
  selectBlock: {
    marginTop: RH(30),
  },
  inputText: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    padding: 0,
    margin: 0,
  },
});

export default StepSix;
