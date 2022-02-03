import { movieItem, state } from '__fixtures__/state';
import { getMovies, getTotalPages } from '../selectors';

describe('Movies selectors', () => {
  describe('getMovies function', () => {
    it('Should return the value stored in store.movies.data', () => {
      expect(getMovies(state)).toStrictEqual([movieItem]);
    });
  });
  describe('getTotalPage function', () => {
    it('Should return the value stored in store.movies.totalPage', () => {
      expect(getTotalPages(state)).toStrictEqual(0);
    });
  });
});
