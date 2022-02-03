import { RootState } from 'modules/types';

export const getMovies = (store: RootState) => store.movies.data;
export const getTotalPages = (store: RootState) => store.movies.total_pages;
