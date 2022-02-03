import { useDispatch } from 'react-redux';
import { useTypedAsyncFn } from 'modules/useTypedAsyncFn';
import { getMovieDetails } from './slice';
import { makeGetRequest } from 'services/networking/client';

export const useGetMovieDetails = () => {
  const dispatch = useDispatch();
  return useTypedAsyncFn<{ id: string }>(
    async ({ id }) => {
      try {
        const movieDetails = await makeGetRequest(`tv/${id}` + '?');
        dispatch(getMovieDetails(movieDetails.data));
      } catch (e) {
        console.error({ e });
      }
    },
    [dispatch],
  );
};
