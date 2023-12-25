import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { RH, RW } from '../../helpers/ratio';
import { BLACK, GREY, WHITE } from '../../theme/colors';
import SvgComponentArrowSelect from '../imagesSvgComponents/SvgComponentArrowSelect';

function CreateCvThird() {
  const [selectFrom, setSelectFrom] = useState('');
  const [selectTo, setSelectTo] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.contentBlock}>
        <Text style={styles.title}>Add Your Education History</Text>
        <Text style={styles.text}>School*</Text>
        <TextInput style={styles.input} />
        <Text style={styles.text}>Degree*</Text>
        <TextInput style={styles.input} />
        <Text style={{ ...styles.text }}>Dates Attended*</Text>
        <SelectList
          defaultOption={{ key: selectFrom, value: selectFrom }}
          arrowicon={<SvgComponentArrowSelect />}
          boxStyles={{ ...styles.select, marginBottom: RH(35) }}
          setSelected={(label) => {
            setSelectFrom(label);
          }}
          data={[2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]}
          renderItem={({ item }) => <Text>{item.label}</Text>}
          placeholder="From"
          save="value"
          dropdownStyles={styles.dropdown}
          dropdownItemStyles={styles.dropdownItem}
        />
        <SelectList
          defaultOption={{ key: selectTo, value: selectTo }}
          arrowicon={<SvgComponentArrowSelect />}
          boxStyles={{ ...styles.select, zIndex: 1 }}
          setSelected={(label) => {
            setSelectTo(label);
          }}
          data={[2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]}
          renderItem={({ item }) => <Text>{item.label}</Text>}
          placeholder="To"
          save="value"
          dropdownStyles={{ ...styles.dropdown, zIndex: 2 }}
          dropdownItemStyles={styles.dropdownItem}
        />
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
    // overflow: 'hidden',
  },
  input: {
    paddingLeft: RW(22),
    backgroundColor: '#D9D9D9',
    borderRadius: RW(8),
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(24),
    color: BLACK,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: RW(13),
    color: BLACK,
    marginTop: RH(30),
    marginBottom: RH(10),
    marginLeft: RW(5),
  },
  select: {
    backgroundColor: GREY,
    marginTop: RH(5),
    borderWidth: 0,
    height: 50,
    alignItems: 'center',
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    width: '25%',
    top: RH(60),
    zIndex: 12,
  },
  dropdownItem: {
    backgroundColor: WHITE,
  },
});

export default CreateCvThird;
