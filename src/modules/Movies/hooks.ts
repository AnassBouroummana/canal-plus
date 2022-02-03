import { useDispatch } from 'react-redux';
import { useTypedAsyncFn } from 'modules/useTypedAsyncFn';
import { getMovies } from './slice';
import { MoviesQueryParams } from './types';
import { makeGetRequest } from 'services/networking/client';

export const useGetMovies = () => {
  const dispatch = useDispatch();
  return useTypedAsyncFn<{ moviesQueryParams: MoviesQueryParams }>(
    async ({ moviesQueryParams }) => {
      try {
        const movies = await makeGetRequest(getMovieListEndpoint(moviesQueryParams));
        dispatch(getMovies(movies.data));
      } catch (e) {
        console.error({ e });
      }
    },
    [dispatch],
  );
};

const getMovieListEndpoint = (moviesQueryParams: MoviesQueryParams) => {
  const { page, query } = moviesQueryParams;
  let endpoint = '';
  if (query) {
    endpoint += `search/tv?query=${query}&`;
  } else {
    endpoint += 'discover/tv?';
  }
  return endpoint + `page=${page}&`;
};
