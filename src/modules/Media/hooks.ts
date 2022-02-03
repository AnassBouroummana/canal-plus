import { useDispatch } from 'react-redux';
import { useTypedAsyncFn } from 'modules/useTypedAsyncFn';
import { getMedias } from './slice';
import { MediaQueryParams } from './types';
import { makeGetRequest } from 'services/networking/client';

export const useGetMedia = () => {
  const dispatch = useDispatch();
  return useTypedAsyncFn<{ mediaQueryParams: MediaQueryParams }>(
    async ({ mediaQueryParams }) => {
      try {
        const medias = await makeGetRequest(getMovieListEndpoint(mediaQueryParams));
        dispatch(getMedias(medias.data));
      } catch (e) {
        console.error({ e });
      }
    },
    [dispatch],
  );
};

const getMovieListEndpoint = (mediaQueryParams: MediaQueryParams) => {
  const { page, query } = mediaQueryParams;
  let endpoint = '';
  if (query) {
    endpoint += `search/tv?query=${query}&`;
  } else {
    endpoint += 'discover/tv?';
  }
  return endpoint + `page=${page}&`;
};
