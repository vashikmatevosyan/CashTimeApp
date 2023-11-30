import React, { useState, useRef, useCallback } from 'react';
import {
  TextInput, View, StyleSheet, Text, TouchableOpacity, FlatList,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import PhoneInput from 'react-native-phone-number-input';
import _ from 'lodash';
import PhoneNumberInput from '../global/PhoneNumberInput';
import { RH, RW } from '../../helpers/ratio';
import {
  BLACK, INDIGO_BLUE, ORANGE, WHITE,
} from '../../theme/colors';

function ProfileEditModal(props) {
  const { onpress } = props;
  const countries = ['Egypt', 'Canada', 'Australia',
    'Ireland', 'Egypt', 'Canada', 'Australia', 'Ireland',
    'Egypt', 'Canada', 'Australia', 'Ireland', 'Egypt', 'Canada', 'Australia', 'Ireland'];
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [skillInfo, setSkillInfo] = useState('');
  const [skill, setSkill] = useState([]);
  // const [valid, setValid] = useState(false);
  // const [showMessage, setShowMessage] = useState(false);

  const handleAddSkill = useCallback(() => {
    if (skillInfo.split(' ').join('')?.length !== 0) {
      setSkill([...skill, { skill: skillInfo, id: _.uniqueId() }]);
    }
    setSkillInfo('');
  }, [skillInfo, skill]);
  const handleDeleteSkill = useCallback((id) => {
    setSkill(skill.filter((e) => e.id !== id));
  }, [skill]);

  console.log(skill);
  const sendUserInfo = useCallback(() => {
    onpress(true);
  }, []);
  const phoneInput = useRef(null);
  const input = {
    width: '100%',
    height: RH(40),
    borderColor: '#D9D9D9',
    margin: 0,
    padding: 0,
    backgroundColor: '#D9D9D9',
    color: 'white',
    borderRadius: 8,
  };
  const textInput = {
    margin: 0,
    padding: 0,
    height: RH(37),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  };
  const codeTextStyle = {
    height: RH(23),
    color: 'black',
    padding: 0,
    fontFamily: 'Lato-Semi Bold',
    backgroundColor: '#D9D9D9',
  };
  const container = {
    borderRadius: 8,
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  };
  const dropdownStyles = {
    borderWidth: 2,
    borderColor: INDIGO_BLUE,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    width: RW(335),
    maxHeight: RH(350),
    textAlign: 'left',
  };
  const inputStyles = {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: RH(40),
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
    marginTop: RH(5),
    color: BLACK,
    borderRadius: 8,
    textAlign: 'left',
  };
  const rowStyles = {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    textAlign: 'left',
  };
  return (
    <View style={styles.inputView}>
      <Text style={styles.labelText}>First Name*</Text>
      <TextInput style={styles.input} />
      <Text style={styles.labelText}>Last Name*</Text>
      <TextInput style={styles.input} />
      <Text style={styles.labelText}>Cv Link*</Text>
      <TextInput style={styles.input} />
      <Text style={styles.labelText}>Expert*</Text>
      <TextInput style={styles.input} />
      <Text style={styles.labelText}>Specialized In*</Text>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        style={styles.input}
        // buttonStyle={{ backgroundColor: WHITE }}
        rowStyle={rowStyles}
        dropdownStyle={dropdownStyles}
        buttonStyle={inputStyles}
        defaultButtonText="Search of Servcie"
        buttonTextStyle={{
          fontSize: 14,
          padding: 0,
          marginTop: 10,
          marginHorizontal: 0,
          alignSelf: 'flex-start',
        }}
      />
      <Text style={styles.labelText}>Phone Number*</Text>
      <View style={styles.input}>

        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="AM"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          containerStyle={input}
          textContainerStyle={container}
          textInputStyle={textInput}
          codeTextStyle={codeTextStyle}
          placeholderTextColor="red"
          // textInputProps={{
          //   placeholder: 'Enter your phone number',
          //   placeholderTextColor: 'gray', // Customize the color of the placeholder text
          //   style: {
          //     fontSize: 16, // Customize the font size
          //     color: 'black', // Customize the color of the input text
          //   },
          // }}
          placeholder="phone number"
          textInputProps={{ placeholderTextColor: BLACK }}
        />
      </View>
      <Text style={styles.labelText}>Skills*</Text>
      <View style={styles.plusView}>
        <TextInput value={skillInfo} style={styles.input} onChangeText={setSkillInfo} />
        <TouchableOpacity onPress={handleAddSkill} style={styles.plusBtn}>
          <Text style={styles.plusBtnText}>+</Text>
        </TouchableOpacity>
      </View>
      {skill.length > 0 ? (
        <View style={styles.skillView}>
          {skill.map((e) => (
            <View style={styles.skillViewSmall}>
              <TouchableOpacity onPress={() => handleDeleteSkill(e.id)} style={styles.skillDeleteBtn}>
                <Text style={styles.skillDeleteText}>X</Text>
              </TouchableOpacity>
              <Text style={styles.skillText} key={e.id}>{e.skill}</Text>
            </View>
          ))}

          {/* <FlatList */}
          {/*   ListHeaderComponent={() => <View />} */}
          {/*   ListFooterComponent={() => <View />} */}
          {/*   data={skill} */}
          {/*   renderItem={({ item }) => <Text style={{ color: 'black' }}>{item.skill}</Text>} */}
          {/*   keyExtractor={(item) => item.id} */}
          {/* /> */}
        </View>
      ) : null}
      <Text style={styles.labelText}>Education*</Text>
      <View style={styles.plusView}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.plusBtn}>
          <Text style={styles.plusBtnText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.labelText}>Languages*</Text>
      <View style={styles.plusView}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.plusBtn}>
          <Text style={styles.plusBtnText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={sendUserInfo} style={styles.saveBtn}>
        <Text style={styles.saveBtnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    marginTop: RH(20),
  },
  input: {
    width: '100%',
    height: RH(40),
    marginTop: RH(5),
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    color: BLACK,
  },

  plusView: {
    position: 'relative',
    // width: '100%',
    // height: RH(40),
    // marginTop: RH(5),
    // backgroundColor: '#D9D9D9',
    // borderRadius: 8,
  },
  plusBtn: {
    width: RW(40),
    height: RH(40),
    backgroundColor: ORANGE,
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusBtnText: {
    color: WHITE,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
  },
  labelText: {
    color: ORANGE,
    fontFamily: 'Lato-Bold',
    marginTop: 10,
  },
  saveBtn: {
    width: '100%',
    height: RH(40),
    backgroundColor: ORANGE,
    borderRadius: 100,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtnText: {
    color: WHITE,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  skillView: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 10,
    // justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  skillViewSmall: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: ORANGE,
    marginTop: 5,
    marginRight: 10,
    borderRadius: 8,
  },
  skillDeleteBtn: {
    width: RW(20),
    height: RH(20),
    borderRadius: 10,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginLeft: 5,
  },
  skillDeleteText: {
    color: 'red',
    fontFamily: 'Lato-Bold',
    fontSize: 12,
  },
  skillText: {
    color: WHITE,
    fontFamily: 'Lato-Bold',
    marginRight: 5,
  },
});

export default ProfileEditModal;
