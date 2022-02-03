import { MediaState } from './Media';
import { MovieDetailsState } from './MovieDetails';

export type RootState = Readonly<{
  media: MediaState;
  movieDetails: MovieDetailsState;
}>;
