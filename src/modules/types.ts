import { MoviesState } from './Movies';
import { MovieDetailsState } from './MovieDetails';

export type RootState = Readonly<{
  movies: MoviesState;
  movieDetails: MovieDetailsState;
}>;
