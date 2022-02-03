import { Movie } from 'modules/Movies';
import { MovieDetails } from 'modules/MovieDetails';
import { RootState } from 'modules/types';

export const movieItem: Movie = {
  id: 1,
  backdrop_path: '/zGqBpfck5wVzS2iy6EsENMZw5kP.jpg',
  name: 'Walking the Americas',
  overview:
    'Explorer Levison Wood sets out to trek 1800 miles from Mexico to Colombia, through fascinating, beautiful and diverse regions, and meets people living everywhere from violent cities to deep jungle.',
  poster_path: '/6NUjtmU99inCbQ6TkwoTDSQuzIU.jpg',
};

export const movie: MovieDetails = {
  id: 1,
  backdrop_path: '/zGqBpfck5wVzS2iy6EsENMZw5kP.jpg',
  name: 'Walking the Americas',
  overview:
    'Explorer Levison Wood sets out to trek 1800 miles from Mexico to Colombia, through fascinating, beautiful and diverse regions, and meets people living everywhere from violent cities to deep jungle.',
  poster_path: '/6NUjtmU99inCbQ6TkwoTDSQuzIU.jpg',
  genres: [{ id: 1, name: 'action' }],
  vote_count: 1200,
  vote_average: 8,
};

export const state: RootState = {
  movies: {
    data: [movieItem],
    total_pages: 0,
  },
  movieDetails: {
    data: movie,
  },
};
