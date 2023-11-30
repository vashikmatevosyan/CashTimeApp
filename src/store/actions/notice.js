import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const noticeList = createAsyncThunk('notice/noticeList', async (payload, thunkAPI) => {
  try {
    const { page, limit } = payload;
    const { data } = await Api.noticeList(page, limit);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
