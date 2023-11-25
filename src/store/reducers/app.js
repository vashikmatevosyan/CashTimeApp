import { createReducer } from '@reduxjs/toolkit';
import {
  tabBarVisible,
} from '../actions/app';

const initialState = {
  tabBarIsVisible: false,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(tabBarVisible, (state, action) => {
    state.tabBarIsVisible = action.payload;
  });
});
