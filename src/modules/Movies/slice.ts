import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviesState } from './types';

const initialState: MoviesState = { data: [], total_pages: 0 };

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state, action: PayloadAction<{ results: Movie[]; total_pages: number }>) => {
      const { total_pages, results } = action.payload;
      state.data = results;
      state.total_pages = total_pages;
    },
  },
});

export const { getMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
