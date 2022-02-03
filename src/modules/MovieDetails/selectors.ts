import { RootState } from 'modules/types';

export const getMovieDetails = (store: RootState) => store.movieDetails?.data;
