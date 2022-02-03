import { media } from '__fixtures__/state';
import reducer, { getMedias } from '../slice';

const response = { results: [media], total_pages: 20 };
const initialState = { data: [], total_pages: 0 };

describe('Media slice', () => {
  describe('get Media list', () => {
    it('Should return an initial state with a data in the data field and totalPage', () => {
      const action = getMedias(response);
      const expectedState = {
        data: response.results,
        total_pages: response.total_pages,
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
