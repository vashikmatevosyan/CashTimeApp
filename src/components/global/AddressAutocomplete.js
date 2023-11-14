import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import { RH } from '../../helpers/ratio';
import { GREY } from '../../theme/colors';
import { autocomplete_key, autocomplete_uri } from '../../../config';

function AddressAutocomplete({ height, marginTop = 0 }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (text) => {
    setQuery(text);
    const apiUrl = `${autocomplete_uri + text}&key=${autocomplete_key}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.predictions) {
        const addresses = data.predictions.map((prediction) => prediction.description);
        setSuggestions(addresses);
      }
    } catch (error) {
      console.error('Error fetching address predictions:', error);
    }
  };

  const handleSelectSuggestion = (item) => {
    console.log(item, 'adress');
    setQuery(item);
    setSuggestions([]);
  };
  return (
    <View style={{ marginTop: RH(marginTop) }}>
      <TextInput
        placeholder="Enter address"
        value={query}
        onChangeText={handleInputChange}
        style={styles.inputText}
      />
      <ScrollView style={{ maxHeight: RH(height) }}>
        {suggestions.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleSelectSuggestion(item)}>
            <Text style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  inputText: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    padding: 10,
    margin: 0,
    backgroundColor: GREY,
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
  },
});

export default AddressAutocomplete;
