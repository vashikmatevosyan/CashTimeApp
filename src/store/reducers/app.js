import { createReducer } from '@reduxjs/toolkit';
import {
  tabBarVisible,
} from '../actions/app';

const initialState = {
  tabBarIsVisible: true,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(tabBarVisible, (state, action) => {
    state.tabBarIsVisible = action.payload;
  });
});
