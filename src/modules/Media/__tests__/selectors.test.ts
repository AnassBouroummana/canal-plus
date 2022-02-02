import { state } from '__fixtures__/state';
import { getMedias, getTotalPages } from '../selectors';

const initialState = { ...state, media: { data: [], total_pages: 0 } };

describe('Movies selectors', () => {
  describe('getMovies function', () => {
    it('Should return the value stored in store.movie.data', () => {
      expect(getMedias(initialState)).toStrictEqual([]);
    });
  });
  describe('getTotalPage function', () => {
    it('Should return the value stored in store.movie.totalPage', () => {
      expect(getTotalPages(initialState)).toStrictEqual(0);
    });
  });
});
