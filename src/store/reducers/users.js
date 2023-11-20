import { createReducer } from '@reduxjs/toolkit';
import {
  loginRequest,
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
  });
});
