import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import { SelectList } from 'react-native-dropdown-select-list';
import { RH, RW } from '../../helpers/ratio';
import {
  BLACK, DARK_GREY, GREY, INPUT, ORANGE, WHITE,
} from '../../theme/colors';
import SvgComponentArrowSelect from '../imagesSvgComponents/SvgComponentArrowSelect';

function CreateCvSecond() {
  const [selectValue, setSelectValue] = useState('');
  const [arr, setArr] = useState([0]);
  return (
    <View style={styles.container}>
      <View style={styles.contentBlock}>
        <Text style={styles.title}>What’s Your Professional Role?</Text>
        <TextInput placeholderTextColor={DARK_GREY} placeholder="UI/UX designer Softer Engineer IOS" style={styles.input} />
        <Text style={styles.title}>Which Languages Do You Know?</Text>
        <ScrollView style={{ flex: 1 }}>
          {arr.map((e) => (
            <View key={e} style={styles.languageBlock}>
              <TextInput
                placeholderTextColor={DARK_GREY}
                placeholder="Language"
                style={{ ...styles.input, width: '45%', marginBottom: 0 }}
              />
              <SelectList
                defaultOption={{ key: selectValue, value: selectValue }}
                arrowicon={<SvgComponentArrowSelect />}
                boxStyles={styles.select}
                setSelected={(label) => setSelectValue(label)}
                data={['bad', 'medium', 'good', 'great']}
                renderItem={({ item }) => <Text>{item.label}</Text>}
                placeholder="Level"
                save="value"
                dropdownStyles={styles.dropdown}
                dropdownItemStyles={styles.dropdownItem}
              />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity onPress={() => setArr([...arr, _.uniqueId()])} style={styles.uploadTextBlock}>
          <Text style={styles.uploadText}>+</Text>
          <Text style={styles.uploadText}>Add Language</Text>
        </TouchableOpacity>
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
  contentBlock: {
    backgroundColor: WHITE,
    width: '100%',
    height: '90%',
    borderRadius: RW(20),
    paddingHorizontal: RW(15),
    paddingTop: RH(30),
    paddingBottom: RH(90),
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(24),
    color: BLACK,
    marginBottom: RH(35),
  },
  input: {
    borderWidth: 1,
    backgroundColor: INPUT,
    borderColor: INPUT,
    width: '100%',
    paddingLeft: RW(20),
    borderRadius: RW(8),
    fontFamily: 'Lato-Regular',
    color: BLACK,
    fontSize: RW(14),
    marginBottom: RH(35),
  },
  languageBlock: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: RH(30),
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
  select: {
    flex: 1,
    width: RW(160),
    backgroundColor: GREY,
    borderWidth: 0,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    marginLeft: RW(35),
  },
  dropdown: {
    position: 'absolute',
    width: '60%',
    top: RH(47),
    right: RW(40),
    borderTopColor: WHITE,
    zIndex: 12,
  },
  dropdownItem: {
    backgroundColor: WHITE,
  },
});

export default CreateCvSecond;
