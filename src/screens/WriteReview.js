import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  BLACK, INDIGO_BLUE, ORANGE, WHITE,
} from '../theme/colors';
import SvgComponentAvatar from '../components/imagesSvgComponents/SvgComponentAvatar';
import { RH, RW } from '../helpers/ratio';
import SvgComponentStar from '../components/imagesSvgComponents/SvgComponentStar';
import SvgComponentUpload from '../components/imagesSvgComponents/SvgComponentUpload';

function WriteReview({ navigation }) {
  const [activeStars, setActiveStars] = useState(0);
  const [files, setFiles] = useState([]);
  const [fullImages, setFullImages] = useState(false);
  const handleGallery = useCallback(() => {
    const options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, (response) => {
      if (files.length <= 3) {
        if (response && response.assets && response.assets.length > 0) {
          setFiles([...files, response]);
          setFullImages(false);
        }
      } else {
        setFullImages(true);
      }
    });
  }, [files, fullImages]);

  const handleDelete = useCallback((index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    setFullImages(false);
  }, [files, fullImages]);

  let filesForReview;

  if (files.length) {
    filesForReview = files.map((file) => ({
      key: file?.assets[0].uri,
      uri: file?.assets[0].uri,
    }));
  }
  return (
    <ScrollView style={styles.review}>
      <View style={styles.container}>
        <View style={styles.review__top}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.review__top__button}>
              Back
            </Text>
          </TouchableOpacity>
          <Text style={styles.review__top__text}>
            Write a Review
          </Text>
          <SvgComponentAvatar />
        </View>
        <View style={styles.review__content}>
          <View style={styles.review__stars__block}>
            <TouchableOpacity onPress={() => setActiveStars(1)}>
              <SvgComponentStar isActive={activeStars >= 1} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveStars(2)}>
              <SvgComponentStar isActive={activeStars >= 2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveStars(3)}>
              <SvgComponentStar isActive={activeStars >= 3} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveStars(4)}>
              <SvgComponentStar isActive={activeStars >= 4} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveStars(5)}>
              <SvgComponentStar isActive={activeStars >= 5} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', marginTop: RH(40) }}>
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: RW(20), marginBottom: RH(15) }}>Add a Photo or a Video Here</Text>
            <View style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: RH(30),
              paddingLeft: RW(15),
              paddingRight: RW(15),
              backgroundColor: '#D9D9D9',
              borderRadius: 22,
            }}
            >
              {!files.length ? <SvgComponentUpload /> : null }
              <FlatList
                data={filesForReview}
                contentcontainerstyle={{ justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}
                renderItem={({ item, index }) => (
                  <View style={{
                    width: 60, height: 60, marginLeft: 5, position: 'relative',
                  }}
                  >
                    <Image
                      source={{ uri: item.uri }}
                      style={{ width: '100%', height: '100%' }}
                    />
                    <TouchableOpacity
                      style={{
                        position: 'absolute', top: -5, right: 0, zIndex: 1,
                      }}
                      onPress={() => handleDelete(index)}
                    >
                      <Text>X</Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.key}
                style={{ width: '100%' }}
                horizontal
              />
              {fullImages ? <Text style={{ color: 'red' }}>Max length 4</Text> : null }
              <TouchableOpacity
                style={{
                  width: '100%', padding: 10, backgroundColor: ORANGE, borderRadius: 100, marginBottom: RH(20), marginTop: RH(10),
                }}
                onPress={handleGallery}
              >
                <Text style={{
                  textAlign: 'center', fontFamily: 'Lato-Regular', color: WHITE, fontSize: RW(14),
                }}
                >
                  Upload Here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: RH(25) }}>
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: RW(20), marginBottom: RH(15) }}>Write A review here</Text>
            <TextInput
              multiline
              numberOfLines={6}
              maxLength={200}
              style={{
                backgroundColor: '#fff', borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.50)', borderRadius: 22, textAlignVertical: 'top', padding: 20,
              }}
            />
            <TouchableOpacity style={{
              width: '100%', padding: 15, backgroundColor: ORANGE, borderRadius: 100, marginTop: 15,
            }}
            >
              <Text style={{
                textAlign: 'center', fontFamily: 'Lato-Regular', color: WHITE, fontSize: RW(14),
              }}
              >
                Confirm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%', padding: 15, borderWidth: 1, backgroundColor: 'transparent', borderColor: '#031054', borderRadius: 100, marginTop: 15,
              }}
            >
              <Text style={{
                textAlign: 'center', fontFamily: 'Lato-Regular', color: '#031054', fontSize: RW(14),
              }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  review: {
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
  review__top: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  review__top__button: {
    color: INDIGO_BLUE,
    fontFamily: 'Lato-Regular',
    fontSize: RW(17),
  },
  review__top__text: {
    color: BLACK,
    fontFamily: 'Lato-Bold',
    fontSize: RW(20),
  },
  review__content: {
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
  },
  review__stars__block: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: RW(10),
    marginTop: RH(40),
  },
});

export default WriteReview;
