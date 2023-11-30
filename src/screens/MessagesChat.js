import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  BLACK, INDIGO_BLUE, ORANGE, WHITE,
} from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import SvgComponentAvatar from '../components/imagesSvgComponents/SvgComponentAvatar';
import SvgComponentSendIcon from '../components/imagesSvgComponents/SvgComponentSendIcon';
import SvgComponentCameraIcon from '../components/imagesSvgComponents/SvgComponentCameraIcon';
import SvgComponentGalleryIcon from '../components/imagesSvgComponents/SvgComponentGalleryIcon';

function MessagesChat({ navigation }) {
  const [files, setFiles] = useState([]);
  const [fullImages, setFullImages] = useState(false);
  const handleGallery = useCallback(() => {
    const options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, (response) => {
      if (response && response.assets && response.assets.length > 0) {
        setFiles([...files, response]);
      }
    });
  }, [files]);

  const handleCamera = useCallback(() => {
    const options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchCamera(options, (response) => {
      if (response && response.assets && response.assets.length > 0) {
        setFiles([...files, response]);
      }
    });
  }, [files]);

  let filesForMessage;

  if (files.length) {
    filesForMessage = files.map((file) => ({
      key: file?.assets[0].uri,
      uri: file?.assets[0].uri,
    }));
  }

  const handleDelete = useCallback((index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    setFullImages(false);
  }, [files, fullImages]);

  return (
    <View style={styles.messagesChat}>
      <View style={styles.container}>
        <View style={styles.messagesChat__top}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.messagesChat__top__button}>
              Back
            </Text>
          </TouchableOpacity>
          <Text style={styles.messagesChat__top__text}>
            Chats
          </Text>
          <SvgComponentAvatar />
        </View>
        <ScrollView style={styles.chat}>
          <View style={styles.chat__left}>
            <Text style={styles.chat__text}>
              I’ll Be there in 3 minutes
            </Text>
          </View>
          <View style={styles.chat__right}>
            <Text style={styles.chat__text}>
              Okay, Thanks you a lot!!
            </Text>
          </View>
        </ScrollView>
        <FlatList
          data={filesForMessage}
          renderItem={({ item, index }) => (
            <View style={{
              width: 40, height: 40, position: 'relative', margin: 2,
            }}
            >
              <Image
                source={{ uri: item.uri }}
                style={{ width: 40, height: 40 }}
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
        <View style={styles.form}>
          <TextInput style={styles.form__input} placeholder="Type message" />
          <TouchableOpacity onPress={handleCamera} style={{ position: 'absolute', right: RH(80) }}>
            <SvgComponentCameraIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGallery} style={{ position: 'absolute', right: RH(45) }}>
            <SvgComponentGalleryIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgComponentSendIcon style={styles.form__icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messagesChat: {
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
  messagesChat__top: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messagesChat__top__button: {
    color: INDIGO_BLUE,
    fontFamily: 'Lato-Regular',
    fontSize: RW(17),
  },
  messagesChat__top__text: {
    color: BLACK,
    fontFamily: 'Lato-Bold',
    fontSize: RW(20),
  },
  chat: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
  },
  chat__left: {
    maxWidth: '90%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 22,
    backgroundColor: ORANGE,
    marginTop: RH(25),
    alignSelf: 'flex-start',
  },

  chat__right: {
    maxWidth: '90%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 22,
    backgroundColor: '#4A62B6',
    marginTop: RH(25),
    alignSelf: 'flex-end',
  },
  chat__text: {
    fontFamily: 'Lato-Regular',
    fontSize: RW(14),
    color: '#fff',
  },
  form: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: RH(10),
    paddingTop: RH(10),
  },
  form__input: {
    width: '90%',
    height: RH(45),
    paddingTop: RH(5),
    paddingBottom: RH(5),
    paddingLeft: RH(10),
    paddingRight: RH(80),
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
  },
  form__icon: {
    width: '10%',
  },
});

export default MessagesChat;
