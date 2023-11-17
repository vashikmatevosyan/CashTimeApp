import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import { AUTOCOMPLETE_KEY, AUTOCOMPLETE_URI, AUTOCOMPLETE_PLACES_URI } from '@env';
import { RH } from '../../helpers/ratio';
import { GREY } from '../../theme/colors';

function AddressAutocomplete({
  height, marginTop = 0, setAddress, defaultValue, code = 'AM',
}) {
  const [query, setQuery] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState([]);
  const handleInputChange = async (text) => {
    setQuery(text);
    const apiUrl = `${AUTOCOMPLETE_URI + text}&key=${AUTOCOMPLETE_KEY}&components=country:${code?.toUpperCase()}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.predictions) {
        const addresses = data.predictions.map((prediction) => ({
          description: prediction.description,
          placeId: prediction.place_id,
        }));
        setSuggestions(addresses);
      }
    } catch (error) {
      console.error('Error fetching address predictions:', error);
    }
  };

  const getPlaceDetails = async (placeId) => {
    const detailsUrl = `${AUTOCOMPLETE_PLACES_URI}${placeId}&key=${AUTOCOMPLETE_KEY}`;
    try {
      const response = await fetch(detailsUrl);
      const data = await response.json();
      if (data.result && data.result?.geometry && data.result?.geometry?.location) {
        const country = data.result.address_components.find((component) => component.types.includes('country'));
        const city = data.result.address_components.find((component) => component.types.includes('locality'));
        const { location } = data.result.geometry;
        setAddress({
          latitude: location.lat,
          longitude: location.lng,
          fullAddress: data.result.name,
          country: country?.long_name,
          city: city?.long_name,
        });
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  const handleSelectSuggestion = (item, placeId) => {
    setQuery(item);
    setSuggestions([]);
    getPlaceDetails(placeId);
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
          <TouchableOpacity
            key={item.placeId}
            onPress={() => handleSelectSuggestion(item.description, suggestions[index].placeId)}
          >
            <Text style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>{item.description}</Text>
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
