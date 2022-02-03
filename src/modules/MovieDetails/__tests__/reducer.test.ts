import { movie } from '__fixtures__/state';
import reducer, { getMovieDetails } from '../slice';

const initialState = { data: null };

describe('Movie details slice', () => {
  describe('get Movie details', () => {
    it('Should return an initial state with a data in the data field', () => {
      const action = getMovieDetails(movie);
      const expectedState = {
        data: movie,
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
