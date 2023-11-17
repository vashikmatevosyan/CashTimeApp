import React, { useCallback, useState } from 'react';
import {
  View, Button, Image, StyleSheet,
} from 'react-native';
import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

function Test() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleGallery = useCallback(() => {
    const options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, (response) => {
      setSelectedImage(response.assets[0]);
    });
  }, []);

  const uploadImage = async () => {
    try {
      if (!selectedImage) {
        console.log('Выберите изображение сначала');
        return;
      }

      const formData = new FormData();
      formData.append('image', {
        uri: selectedImage.uri,
        type: selectedImage.type,
        name: 'myImage.jpg',
      });

      const response = await axios.post('http://192.168.31.139:4000/test/test', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Ошибка при отправке изображения', error);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage.uri }} style={styles.imagePreview} />
      )}
      <Button title="Выбрать изображение" onPress={handleGallery} />
      <Button title="Отправить на сервер" onPress={uploadImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default Test;
