import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import MapView from 'react-native-maps';
import { CheckBox } from 'react-native-elements';
import Calendar from 'react-native-calendars/src/calendar';
import SvgComponentAvatar from '../components/imagesSvgComponents/SvgComponentAvatar';
import {
  DARK_BLUE, INDIGO_BLUE, ORANGE, WHITE,
} from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import SvgComponentSearchIcon from '../components/imagesSvgComponents/SvgComponentSearchIcon';
import SvgComponentFilterIcon from '../components/imagesSvgComponents/SvgComponentFilterIcon';
import AddressAutocomplete from '../components/global/AddressAutocomplete';

const experienceLevel = ['Entry Level', 'Intermediate', 'Expert'];

function Main() {
  const [activeComponent, setActiveComponent] = useState('map');
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [hourlyCheckbox, setHourlyCheckbox] = useState(true);
  const [selectedDay, setSelectedDay] = useState([]);
  const [checkBoxStates, setCheckBoxStates] = useState(
    experienceLevel.map(() => false),
  );

  const handleCheckBoxPress = (index) => {
    const newCheckBoxStates = [...checkBoxStates];
    newCheckBoxStates[index] = !newCheckBoxStates[index];
    setCheckBoxStates(newCheckBoxStates);
  };

  const markedDates = selectedDay.reduce((acc, date) => {
    acc[date] = { selected: true, selectedColor: ORANGE };
    return acc;
  }, {});

  const handleCalendarDayPress = (day) => {
    if (!selectedDay[0]) {
      setSelectedDay([day.dateString]);
    } else {
      const [startDate] = selectedDay;
      const currentDate = day.dateString;

      if (currentDate > startDate) {
        const datesBetween = getDatesBetween(new Date(startDate), new Date(currentDate));
        const newSelectedDates = [...datesBetween, currentDate];

        setSelectedDay(newSelectedDates);
      } else {
        setSelectedDay([currentDate]);
      }
    }
  };

  const getDatesBetween = (startDate, endDate) => {
    const dates = [];
    const currentDate = new Date(startDate);

    while (currentDate.getTime() <= endDate.getTime()) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  return (
    <>
      <View style={styles.main}>
        <View style={styles.main__top}>
          <View style={styles.main__top__block}>
            <TouchableOpacity
              style={{
                width: '60%', padding: 8, backgroundColor: activeComponent === 'map' ? INDIGO_BLUE : '#D9D9D9', borderRadius: 22, zIndex: activeComponent === 'map' ? 1 : 0,
              }}
              onPress={() => setActiveComponent('map')}
            >
              <Text style={{
                color: activeComponent === 'map' ? WHITE : DARK_BLUE, textAlign: 'center', fontSize: RW(14), fontFamily: 'Lato-Regular',
              }}
              >
                Map
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '60%', padding: 8, backgroundColor: activeComponent === 'filter' ? INDIGO_BLUE : '#D9D9D9', borderRadius: 22, marginLeft: '-10%',
              }}
              onPress={() => setActiveComponent('filter')}
            >
              <Text style={{
                color: activeComponent === 'filter' ? WHITE : DARK_BLUE, textAlign: 'center', fontSize: RW(14), fontFamily: 'Lato-Regular',
              }}
              >
                List
              </Text>
            </TouchableOpacity>
          </View>
          <SvgComponentAvatar />
        </View>
        <View style={styles.main__content}>
          {activeComponent === 'map' ? (
            <View style={styles.main__map}>
              <View style={styles.map__input__block}>
                <SvgComponentSearchIcon style={styles.map__input__icon} />
                <TextInput placeholder="Location" style={styles.map__input} />
              </View>
              <View style={styles.main__map__block}>
                <MapView
                  initialRegion={{
                    latitude: 40.0706185,
                    longitude: 45.0407411,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
            </View>
          ) : (
            <View style={styles.main__filter}>
              <TouchableOpacity onPress={() => setOpenFilterModal(true)}>
                <SvgComponentFilterIcon />
              </TouchableOpacity>
              <ScrollView style={styles.main__filter__content}>
                <View style={{
                  width: '100%', position: 'relative', padding: 15, flexDirection: 'column', backgroundColor: '#D9D9D9', borderRadius: 22, marginBottom: 20,
                }}
                >
                  <Text style={{
                    fontFamily: 'Lato-Regular', fontSize: RW(16), color: DARK_BLUE, marginBottom: 10,
                  }}
                  >
                    I’m Looking For a lady Who Will Clean My balcony
                  </Text>
                  <View>
                    <Text>Hourly:</Text>
                    <Text>4000 AMD</Text>
                  </View>
                  <View>
                    <Text>Location:</Text>
                    <Text>Armenia/Yerevan</Text>
                  </View>
                  <TouchableOpacity style={{
                    width: '100%', padding: 10, backgroundColor: INDIGO_BLUE, borderRadius: 100, marginTop: 15,
                  }}
                  >
                    <Text style={{ fontFamily: 'Lato-Regular', color: WHITE, textAlign: 'center' }}>Send a Request</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                  width: '100%', position: 'relative', padding: 15, flexDirection: 'column', backgroundColor: '#D9D9D9', borderRadius: 22, marginBottom: 20,
                }}
                >
                  <Text style={{
                    fontFamily: 'Lato-Regular', fontSize: RW(16), color: DARK_BLUE, marginBottom: 10,
                  }}
                  >
                    I’m Looking For a lady Who Will Clean My balcony
                  </Text>
                  <View>
                    <Text>Hourly:</Text>
                    <Text>4000 AMD</Text>
                  </View>
                  <View>
                    <Text>Location:</Text>
                    <Text>Armenia/Yerevan</Text>
                  </View>
                  <TouchableOpacity style={{
                    width: '100%', padding: 10, backgroundColor: INDIGO_BLUE, borderRadius: 100, marginTop: 15,
                  }}
                  >
                    <Text style={{ fontFamily: 'Lato-Regular', color: WHITE, textAlign: 'center' }}>Send a Request</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                  width: '100%', position: 'relative', padding: 15, flexDirection: 'column', backgroundColor: '#D9D9D9', borderRadius: 22, marginBottom: 20,
                }}
                >
                  <Text style={{
                    fontFamily: 'Lato-Regular', fontSize: RW(16), color: DARK_BLUE, marginBottom: 10,
                  }}
                  >
                    I’m Looking For a lady Who Will Clean My balcony
                  </Text>
                  <View>
                    <Text>Hourly:</Text>
                    <Text>4000 AMD</Text>
                  </View>
                  <View>
                    <Text>Location:</Text>
                    <Text>Armenia/Yerevan</Text>
                  </View>
                  <TouchableOpacity style={{
                    width: '100%', padding: 10, backgroundColor: INDIGO_BLUE, borderRadius: 100, marginTop: 15,
                  }}
                  >
                    <Text style={{ fontFamily: 'Lato-Regular', color: WHITE, textAlign: 'center' }}>Send a Request</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                  width: '100%', position: 'relative', padding: 15, flexDirection: 'column', backgroundColor: '#D9D9D9', borderRadius: 22,
                }}
                >
                  <Text style={{
                    fontFamily: 'Lato-Regular', fontSize: RW(16), color: DARK_BLUE, marginBottom: 10,
                  }}
                  >
                    I’m Looking For a lady Who Will Clean My balcony
                  </Text>
                  <View>
                    <Text>Hourly:</Text>
                    <Text>4000 AMD</Text>
                  </View>
                  <View>
                    <Text>Location:</Text>
                    <Text>Armenia/Yerevan</Text>
                  </View>
                  <TouchableOpacity style={{
                    width: '100%', padding: 10, backgroundColor: INDIGO_BLUE, borderRadius: 100, marginTop: 15,
                  }}
                  >
                    <Text style={{ fontFamily: 'Lato-Regular', color: WHITE, textAlign: 'center' }}>Send a Request</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          ) }
        </View>
      </View>
      {openFilterModal ? (
        <ScrollView style={styles.main__modal}>
          <TouchableOpacity
            style={styles.main__modal__close}
            onPress={() => setOpenFilterModal(false)}
          >
            <Text style={{ fontSize: RW(20), color: '#000' }}>X</Text>
          </TouchableOpacity>
          <View style={{ marginTop: RH(100) }}>
            <Text style={{
              marginLeft: RW(25), fontFamily: 'Lato-Regular', fontSize: RW(20), color: WHITE,
            }}
            >
              Experience level
            </Text>
            {experienceLevel.map((e, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -15 }}>
                <CheckBox
                  onPress={() => handleCheckBoxPress(index)}
                  checked={checkBoxStates[index]}
                  containerStyle={styles.checkbox}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor={ORANGE}
                />
                <Text style={{ color: WHITE, marginLeft: 10 }}>{e}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: RH(50) }}>
            <Text style={{
              marginLeft: RW(25), fontFamily: 'Lato-Regular', fontSize: RW(20), color: WHITE,
            }}
            >
              Job Type
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  onPress={() => setHourlyCheckbox(true)}
                  checked={hourlyCheckbox}
                  containerStyle={styles.checkbox}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor={ORANGE}
                />
                <Text style={{ color: WHITE, marginLeft: 10 }}>Hourly</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  onPress={() => setHourlyCheckbox(false)}
                  checked={!hourlyCheckbox}
                  containerStyle={styles.checkbox}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor={ORANGE}
                />
                <Text style={{ color: WHITE, marginLeft: 10 }}>Per Project</Text>
              </View>
            </View>
            {hourlyCheckbox ? (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: RW(25) }}>
                <TextInput
                  keyboardType="numeric"
                  placeholder="min"
                  style={{
                    width: RW(70), height: RH(30), padding: 5, backgroundColor: WHITE,
                  }}
                />
                <Text style={{ color: WHITE, marginLeft: 5, marginRight: 10, }}>/hr</Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="max"
                  style={{
                    width: RW(70), height: RH(30), padding: 5, backgroundColor: WHITE,
                  }}
                />
                <Text style={{ color: WHITE, marginLeft: 5 }}>/hr</Text>
              </View>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: RW(25) }}>
                <TextInput
                  keyboardType="numeric"
                  placeholder="min"
                  style={{
                    width: RW(70), height: RH(30), padding: 5, backgroundColor: WHITE,
                  }}
                />
                <Text style={{ color: WHITE, marginLeft: 5, marginRight: 20 }}>$/hr</Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="max"
                  style={{
                    width: RW(70), height: RH(30), padding: 5, backgroundColor: WHITE,
                  }}
                />
                <Text style={{ color: WHITE, marginLeft: 5 }}>$/hr</Text>
              </View>
            )}
          </View>
          <View style={{ marginTop: RH(50), marginLeft: RW(25) }}>
            <Text style={{
              fontFamily: 'Lato-Regular', fontSize: RW(20), color: WHITE, marginBottom: RH(20),
            }}
            >
              Date Picker
            </Text>
            <Calendar
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                width: '90%',
              }}
              onDayPress={handleCalendarDayPress}
              markedDates={markedDates}
            />
          </View>
          <View style={{ width: '80%', marginTop: RH(30), marginLeft: RW(25) }}>
            <Text style={{
              fontFamily: 'Lato-Regular', fontSize: RW(20), color: WHITE, marginBottom: RH(10),
            }}
            >
              Client Location
            </Text>
            <AddressAutocomplete height={200} defaultValue="" marginTop={0} />
          </View>
          <View style={{
            width: '80%', marginTop: RH(30), marginBottom: 20, marginLeft: RW(25),
          }}
          >
            <Text style={{
              fontFamily: 'Lato-Regular', fontSize: RW(20), color: WHITE, marginBottom: RH(10),
            }}
            >
              Categories
            </Text>
            <TextInput
              placeholder="Select a Category"
              style={{
                width: '100%', height: 50, padding: 5, backgroundColor: '#D9D9D9', borderRadius: 8,
              }}
            />
          </View>
        </ScrollView>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: WHITE,
    paddingTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
  main__top: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RH(15),
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  main__top__block: {
    width: RW(170),
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: 22,
  },
  main__content: {
    width: '100%',
    position: 'relative',
    marginTop: RH(20),
  },
  map__input__block: {
    width: '100%',
    position: 'relative',
    marginTop: RH(20),
  },
  map__input__icon: {
    position: 'absolute',
    left: 20,
    top: RH(17),
    zIndex: 1,
  },
  map__input: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#EDECEC',
    paddingLeft: 40,
    paddingRight: 20,
    height: RH(50),
  },
  main__map: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  main__map__block: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  main__filter: {
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    marginTop: RH(5),
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  main__filter__content: {
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: '#EDECEC',
    padding: 20,
    marginTop: 12,
  },
  main__modal: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: INDIGO_BLUE,
  },
  main__modal__close: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: WHITE,
    position: 'absolute',
    right: RW(30),
    top: RH(60),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 15,
  },
});

export default Main;
