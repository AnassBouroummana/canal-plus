import reducer, { getMedias } from '../slice';

const data = { results: [], total_pages: 20 };
const initialState = { data: [], total_pages: 0 };

describe('Media slice', () => {
  describe('get Media list', () => {
    it('Should return an initial state with a data in the data field and totalPage', () => {
      const action = getMedias(data);
      const expectedState = {
        data: data.results,
        total_pages: data.total_pages,
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
