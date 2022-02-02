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
        const medias = await makeGetRequest(getEndpoint(mediaQueryParams));
        dispatch(getMedias(medias.data));
      } catch (e) {
        console.error({ e });
      }
    },
    [dispatch],
  );
};

const getEndpoint = (mediaQueryParams: MediaQueryParams) => {
  const { page, query } = mediaQueryParams;
  const path = 'https://api.themoviedb.org/3/';
  if (query) {
    return (
      path +
      `search/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&page=${page}&query=${query}`
    );
  }
  return (
    path + `discover/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&page=${page}`
  );
};
