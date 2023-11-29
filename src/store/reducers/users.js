import { createReducer } from '@reduxjs/toolkit';
import {
  getProfile,
  loginRequest, registerRequest,
} from '../actions/users';
import { storage } from '../../helpers/Storage';

const initialState = {
  token: storage.getString('token') || '',
  profile: {},
};

export default createReducer(initialState, (builder) => {
  builder.addCase(loginRequest.fulfilled, (state, action) => {
    const { token, user } = action.payload;
    storage.set('token', token);
    state.profile = user;
    state.token = token;
  })
    .addCase(getProfile.fulfilled, (state, action) => {
      const { user } = action.payload;
      return { ...state, profile: user };
    })
    .addCase(registerRequest.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      if (token) {
        storage.set('token', token);
      }
      state.profile = user;
      state.token = token;
    });
});
