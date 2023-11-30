import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text, ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import CreateJobsTitles from './CreateJobsTitles';
import { RH, RW } from '../../helpers/ratio';
import UltraSmallText from './UltraSmallText';
import { getSkills } from '../../store/actions/utils';
import {
  BLACK, ORANGE, WHITE,
} from '../../theme/colors';
import JobsInputs from './JobsInputs';

function StepTwo({ onData }) {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.utils.skills);
  const secondFormArray = useSelector((state) => state.createJobForm.dataFromChild2) ?? [];
  const [selectedSkills, setSelectedSkills] = useState(secondFormArray || []);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getSkills(inputValue));
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);
  useEffect(() => {
    onData({ dataFromChild2: selectedSkills });
  }, [selectedSkills]);
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
      <CreateJobsTitles width="70%" title="What are the main skills required for your work?" align="center" />
      <UltraSmallText text="Search skills or add your own" top={RH(20)} size={16} />
      <JobsInputs value={inputValue} setValue={setInputValue} width="100%" top={RH(10)} />
      {selectedSkills.length > 0 && (
        <View style={{ height: 'auto', flex: 0.6 }}>
          <UltraSmallText text="Selected Skills" top={RH(5)} size={16} />
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {selectedSkills.map((e) => (
                <View key={e.id} style={styles.addedSkills}>
                  <TouchableOpacity
                    onPress={() => handleSkillDelete(e.id)}
                    style={[styles.addedSkillText, {
                      marginRight: 10,
                    }]}
                  >
                    <Text style={[styles.addedSkillText, { fontSize: 20 }]}>X</Text>
                  </TouchableOpacity>
                  <Text style={styles.addedSkillText}>{e.skill}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
      <View style={{ flex: 1 }}>
        {skills.length > 0 && <UltraSmallText text="Suggested skills" top={RH(0)} size={16} />}
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
            )) : (
              <View style={styles.notFoundBlock}>
                <CreateJobsTitles title="Skill not found, add yours?" />
                <CreateJobsTitles title={inputValue} color={BLACK} />
                <TouchableOpacity
                  onPress={() => handleAddSkill(inputValue)}
                  style={styles.addSkillBtn}
                >
                  <Text style={styles.addBtnText}>Add Skill</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: RH(15),
    flex: 1,
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
    backgroundColor: WHITE,
    borderColor: WHITE,
    width: '100%',
    borderRadius: 8,
    fontFamily: 'Lato-Regular',
    color: BLACK,
    fontSize: RW(16),
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
    marginLeft: 5,
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
    backgroundColor: WHITE,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 5,
    flexDirection: 'row',
    borderRadius: 100,
  },
  addedSkillText: {
    color: BLACK,
    fontFamily: 'Lato-SemiBold',
    fontSize: 16,
    fontStyle: 'normal',
  },
});

export default StepTwo;
