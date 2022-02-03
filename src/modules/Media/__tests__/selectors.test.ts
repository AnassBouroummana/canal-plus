import { media, state } from '__fixtures__/state';
import { getMedias, getTotalPages } from '../selectors';

describe('Movies selectors', () => {
  describe('getMovies function', () => {
    it('Should return the value stored in store.movie.data', () => {
      expect(getMedias(state)).toStrictEqual([media]);
    });
  });
  describe('getTotalPage function', () => {
    it('Should return the value stored in store.movie.totalPage', () => {
      expect(getTotalPages(state)).toStrictEqual(0);
    });
  });
});
