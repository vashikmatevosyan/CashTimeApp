import React, {
  useCallback, useState,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import PhoneInput from 'react-native-phone-number-input';
import { useSelector } from 'react-redux';
import { RH, RW } from '../../helpers/ratio';
import { GREY, ORANGE, WHITE } from '../../theme/colors';
import SvgComponentDefaultImage from '../imagesSvgComponents/SvgComponentDefaultImage';
import AddressAutocomplete from '../global/AddressAutocomplete';
import avatarImage from '../../../assets/images/avatar.png';
import LineForSeventhStep from './LineForSeventhStep';

function CreateCvSeventh({ file: image }) {
  const sixtyFormObj = useSelector((state) => state.createJobForm.dataFromChild6) ?? {};
  const [file, setFile] = useState(image || {});
  const [selectedImageUri, setSelectedImageUri] = useState(sixtyFormObj.selectedPhoto || '');
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
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.firstBlock}>
          <View style={styles.imageBlock}>
            {file.uri ? (
              <Image
                source={avatarImage}
                style={styles.image}
              />
            ) : <SvgComponentDefaultImage />}
          </View>
          <TouchableOpacity onPress={handleGallery} style={styles.uploadTextBlock}>
            <Text style={styles.uploadText}>+</Text>
            <Text style={styles.uploadText}>Upload a Picture</Text>
          </TouchableOpacity>
        </View>
        <LineForSeventhStep text="Add Your Name" />
        <LineForSeventhStep text="City*" />
        <LineForSeventhStep text="Street Address* (won’t show on profile)" />
        <LineForSeventhStep text="Zip/Postal Code" />
        <View style={{ marginTop: RH(10) }}>
          <View style={{ height: 20 }}>
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
    marginTop: RH(80),
    width: '100%',
  },
  content: {
    backgroundColor: WHITE,
    width: '100%',
    height: '90%',
    borderRadius: RW(20),
    paddingHorizontal: RW(15),
    paddingTop: RH(30),
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
    height: '50%',
    marginLeft: RW(30),
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
  firstBlock: {
    flexDirection: 'row',
    marginBottom: RH(15),
  },
});

export default CreateCvSeventh;
