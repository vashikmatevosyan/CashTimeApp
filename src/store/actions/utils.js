import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const getCountries = createAsyncThunk('utils/getCountries', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.getCountries();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const getSkills = createAsyncThunk('app/getSkills', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.getSkills(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
