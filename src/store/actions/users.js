import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const loginRequest = createAsyncThunk('users/loginRequest', async (payload, thunkAPI) => {
  try {
    const {
      email,
      password,
    } = payload;
    const { data } = await Api.login(email, password);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
