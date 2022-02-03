import { movie } from '__fixtures__/state';
import reducer, { getMovies } from '../slice';

const response = { results: [movie], total_pages: 20 };
const initialState = { data: [], total_pages: 0 };

describe('Movies List slice', () => {
  describe('get Movies list', () => {
    it('Should return an initial state with a data in the data field and totalPage', () => {
      const action = getMovies(response);
      const expectedState = {
        data: response.results,
        total_pages: response.total_pages,
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
