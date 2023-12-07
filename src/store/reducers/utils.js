import { createReducer } from '@reduxjs/toolkit';
import { getCountries, getSkills } from '../actions/utils';

const initialState = {
  countries: [],
  skills: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload.map((country) => ({
        id: country.id,
        value: country.label,
        label: country.value,
      }));
    }).addCase(getSkills.fulfilled, (state, action) => {
      const { skills } = action.payload;
      // state.skills = skills.map((skill) => ({
      //   id: skill.id,
      //   value: skill.skill,
      //   disabled: false,
      // }));
      state.skills = skills;
    });
});
