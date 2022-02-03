import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetails } from '.';
import { MovieDetailsState } from './types';

const initialState: MovieDetailsState = { data: null };

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    getMovieDetails: (state, action: PayloadAction<MovieDetails>) => {
      console.log('hello');
      state.data = action.payload;
    },
  },
});

export const { getMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
