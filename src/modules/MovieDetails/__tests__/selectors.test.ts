import { movie, state } from '__fixtures__/state';
import { getMovieDetails } from '../selectors';

describe('MovieDetails selectors', () => {
  describe('getMovieDetail function', () => {
    it('Should return the value stored in store.movieDetails.data', () => {
      expect(getMovieDetails(state)).toStrictEqual(movie);
    });
  });
});
