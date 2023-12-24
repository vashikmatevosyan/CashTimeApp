import React, { useCallback, useState } from 'react';
import {
  StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput,
} from 'react-native';
import _ from 'lodash';
import { SelectList } from 'react-native-dropdown-select-list';
import { RH, RW } from '../../helpers/ratio';
import {
  BLACK, DARK_GREY, GREY, LIGHT_GREY, ORANGE, WHITE,
} from '../../theme/colors';
import SvgComponentArrowSelect from '../imagesSvgComponents/SvgComponentArrowSelect';

function CreateCvFifth() {
  const skills = [{ id: 1, skill: 'aaa' }, { id: 2, skill: 'bbb' }, { id: 3, skill: 'ccc' }, { id: 4, skill: 'ddd' }];
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleAddSkill = useCallback((skill) => {
    const lowerCaseSelectedSkills = selectedSkills.map((s) => s.skill.toLowerCase());
    const lowerCaseSkill = skill.toLowerCase();

    if (!lowerCaseSelectedSkills.includes(lowerCaseSkill)) {
      setSelectedSkills([...selectedSkills, { skill, id: _.uniqueId() }]);
    }
  }, [selectedSkills, setSelectedSkills, inputValue]);

  const handleSkillDelete = useCallback((e) => {
    setSelectedSkills(selectedSkills.filter((item) => item.id !== e));
  }, [selectedSkills]);
  return (
    <View style={styles.container}>
      <View style={styles.contentBlock}>
        <Text style={styles.title}>Great! Now Let Us Know What Services You Do.</Text>
        <SelectList
          defaultOption={{ key: inputValue, value: inputValue }}
          arrowicon={<SvgComponentArrowSelect />}
          boxStyles={{ ...styles.select, marginBottom: RH(60) }}
          setSelected={(label) => {
            if (selectedSkills.length > 0) {
              setSelectedSkills([...selectedSkills, { id: _.uniqueId(), skill: label }]);
            }
          }}
          data={[2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]}
          renderItem={({ item }) => <Text>{item.label}</Text>}
          placeholder="Search of Servcie"
          save="value"
          dropdownStyles={styles.dropdown}
          dropdownItemStyles={styles.dropdownItem}
        />
        <View style={{ height: 'auto', flex: 0.6 }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {selectedSkills.map((e) => (
                <View key={e.id} style={styles.addedSkills}>
                  <Text style={styles.addedSkillText}>{e.skill}</Text>
                  <TouchableOpacity
                    onPress={() => handleSkillDelete(e.id)}
                    style={styles.addedSkillText}
                  >
                    <Text style={{ ...styles.addedSkillText, marginLeft: RW(10), color: BLACK }}>x</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.skillBtnBlock}>
          <Text style={{ ...styles.text, marginLeft: RW(10) }}>Suggested services</Text>
          <ScrollView style={{ flex: 1, marginBottom: 20 }}>
            <View style={{
              flexDirection: 'row', flexWrap: 'wrap', flex: 1, height: 'auto',
            }}
            >
              {skills.length > 0 ? skills.map((e) => (
                <TouchableOpacity
                  key={e.id}
                  style={styles.skillBtn}
                  onPress={() => handleAddSkill(e.skill)}
                >
                  <Text style={[styles.skillText, { marginRight: 5 }]}>+</Text>
                  <Text style={styles.skillText}>{e.skill}</Text>
                </TouchableOpacity>
              )) : null}
            </View>
          </ScrollView>
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
  contentBlock: {
    backgroundColor: WHITE,
    width: '100%',
    height: '90%',
    borderRadius: RW(20),
    paddingHorizontal: RW(15),
    paddingTop: RH(30),
    // overflow: 'hidden',
  },
  addSkillBtn: {
    backgroundColor: ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  singleSkill: {
    fontFamily: 'Lato-SemiBold',
    color: BLACK,
    fontSize: 16,
    fontStyle: 'normal',
  },
  addBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    color: WHITE,
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    fontStyle: 'normal',
  },
  input: {
    borderWidth: 1,
    backgroundColor: LIGHT_GREY,
    borderColor: LIGHT_GREY,
    width: '90%',
    paddingLeft: RW(20),
    borderRadius: RW(8),
    fontFamily: 'Lato-Regular',
    color: DARK_GREY,
    fontSize: RW(16),
  },
  inputBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: LIGHT_GREY,
    borderColor: LIGHT_GREY,
    width: '100%',
    borderRadius: RW(8),
    fontFamily: 'Lato-Regular',
    color: DARK_GREY,
    fontSize: RW(16),
    paddingRight: RW(5),
  },
  addTextBlock: {
    width: '10%',
    height: RH(40),
    borderRadius: RW(25),
    backgroundColor: ORANGE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: WHITE,
    fontSize: RW(28),
  },
  skillText: {
    fontFamily: 'Lato-SemiBold',
    color: WHITE,
    fontSize: 16,
    fontStyle: 'normal',
  },
  skillBtn: {
    padding: 10,
    backgroundColor: ORANGE,
    marginRight: 5,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  notFoundBlock: {
    marginTop: RH(30),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addedSkills: {
    backgroundColor: LIGHT_GREY,
    paddingVertical: RW(10),
    paddingHorizontal: RW(10),
    margin: 5,
    flexDirection: 'row',
    borderRadius: RW(100),
  },
  addedSkillText: {
    color: DARK_GREY,
    fontFamily: 'Lato-SemiBold',
    fontSize: RW(14),
    fontStyle: 'normal',
  },
  text: {
    color: BLACK,
    fontFamily: 'Lato-Regular',
    fontSize: RW(14),
    marginBottom: RW(5),
  },
  skillBtnBlock: {
    flex: 1,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(24),
    color: BLACK,
    marginBottom: RH(60),
  },
  select: {
    backgroundColor: GREY,
    borderWidth: 0,
    height: RH(50),
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

export default CreateCvFifth;
