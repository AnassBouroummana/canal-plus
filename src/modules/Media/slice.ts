import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Media, MediaState } from './types';

const initialState: MediaState = { data: [], total_pages: 0 };

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    getMedias: (
      state,
      action: PayloadAction<{ results: Media[]; total_pages: number }>,
    ) => {
      const { total_pages, results } = action.payload;
      state.data = results;
      state.total_pages = total_pages;
    },
  },
});

export const { getMedias } = mediaSlice.actions;
export default mediaSlice.reducer;
