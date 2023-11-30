import { createReducer } from '@reduxjs/toolkit';
import {
  noticeList,
} from '../actions/notice';

const initialState = {
  notices: [],
  currentPage: 0,
  totalPages: 0,
  count: 0,
  // noticesSingleJob: [],
  // currentPageSingleJob: 0,
  // totalPagesSingleJob: 0,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(noticeList.fulfilled, (state, action) => {
    const {
      notices, currentPage, totalPages, count,
    } = action.payload;
    state.notices = notices;
    state.currentPage = currentPage;
    state.totalPages = totalPages;
    state.count = count;
  });
});
