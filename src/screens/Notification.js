import React from 'react';
import {
  StyleSheet, View, Text, FlatList, Image, TouchableOpacity,
} from 'react-native';
import {
  DARK_BLUE, GREY, INDIGO_BLUE, WHITE,
} from '../theme/colors';

function Notification() {
  const data = [
    {
      text: 'You’ve received a request from Nikitta from your published job ',
      image: 'https://picsum.photos/200/300',
      id: 1,
    },
    {
      text: 'Some text 2',
      image: 'https://example.com/image2.jpg',
      id: 2,
    },
    {
      text: 'Some text 3',
      image: 'https://picsum.photos/200/300',
      id: 3,
    },
    {
      text: 'Some text 4',
      image: 'https://example.com/image4.jpg',
      id: 4,
    },
    {
      text: 'Some text 5',
      image: 'https://example.com/image5.jpg',
      id: 5,
    },
    {
      text: 'Some text 6',
      image: 'https://example.com/image6.jpg',
      id: 6,
    },
    {
      text: 'Some text 7',
      image: 'https://example.com/image7.jpg',
      id: 7,
    },
    {
      text: 'Some text 8',
      image: 'https://example.com/image8.jpg',
      id: 8,
    },
    {
      text: 'Some text 9',
      image: 'https://example.com/image9.jpg',
      id: 9,
    },
    {
      text: 'Some text 10',
      image: 'https://example.com/image10.jpg',
      id: 10,
    },
    {
      text: 'Some text 11',
      image: 'https://example.com/image11.jpg',
      id: 11,
    },
    {
      text: 'Some text 12',
      image: 'https://example.com/image12.jpg',
      id: 12,
    },
    {
      text: 'Some text 13',
      image: 'https://example.com/image13.jpg',
      id: 13,
    },
    {
      text: 'Some text 14',
      image: 'https://example.com/image14.jpg',
      id: 14,
    },
    {
      text: 'Some text 15',
      image: 'https://example.com/image15.jpg',
      id: 15,
    },
    {
      text: 'Some text 16',
      image: 'https://example.com/image16.jpg',
      id: 16,
    },
    {
      text: 'Some text 17',
      image: 'https://example.com/image17.jpg',
      id: 17,
    },
    {
      text: 'Some text 18',
      image: 'https://example.com/image18.jpg',
      id: 18,
    },
    {
      text: 'Some text 19',
      image: 'https://example.com/image19.jpg',
      id: 19,
    },
    {
      text: 'Some text 20',
      image: 'https://example.com/image20.jpg',
      id: 20,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.block}>
              <View style={styles.infoBlock}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
              </View>
              <View style={styles.btnBlock}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#EDECEC' }]}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <Text>Accept</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 5,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: DARK_BLUE,
    fontWeight: '400',
    marginLeft: 15,
    fontStyle: 'normal',
  },
  block: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: GREY,
    borderRadius: 20,
    minHeight: 100,
  },
  infoBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'flex-start',
  },
  btn: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    backgroundColor: INDIGO_BLUE,
    borderRadius: 15,
  },
  btnBlock: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
});

export default Notification;
