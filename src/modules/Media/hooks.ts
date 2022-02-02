import { useDispatch } from 'react-redux';
import { useTypedAsyncFn } from 'modules/useTypedAsyncFn';
import { getMedias } from './slice';
import { MediaQueryParams } from './types';
import { makeGetRequest } from 'services/networking/client';
import { BASE_PATH } from 'utils/constants';
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
  let endpoint = BASE_PATH;
  if (query) {
    endpoint += `search/tv?query=${query}&`;
  } else {
    endpoint += 'discover/tv?';
  }
  return endpoint + `page=${page}`;
};
