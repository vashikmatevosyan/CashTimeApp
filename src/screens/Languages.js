import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { DARK_BLUE } from '../theme/colors';
import { RH } from '../helpers/ratio';
import LanguageCircle from '../components/screenComponents/LanguageCircle';
import SvgComponentLanguageSelected
  from '../components/imagesSvgComponents/SvgComponentLanguageSelected';
import SvgComponentsLanguagesBig from '../components/imagesSvgComponents/SvgComponentsLanguagesBig';

function Languages() {
  const [language, setLanguage] = useState('en');
  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Armenian', value: 'am' },
    { label: 'Russian', value: 'ru' },
  ];
  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <View style={styles.container}>
      <View>
        {languages.map((e) => (
          <TouchableOpacity
            onPress={() => handleChangeLanguage(e.value)}
            key={e.value}
            style={styles.btnBlock}
          >
            <Text style={styles.text}>{e.label}</Text>
            {language === e.value ? <SvgComponentLanguageSelected /> : <LanguageCircle /> }
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginTop: RH(40) }}>
        <SvgComponentsLanguagesBig />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
  },
  text: {
    color: DARK_BLUE,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
  },
  btnBlock: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Languages;
