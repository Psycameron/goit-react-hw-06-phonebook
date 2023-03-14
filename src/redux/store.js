import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice, filterSlice } from './slice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookSlice.reducer,
    filter: filterSlice.reducer,
  },
});
