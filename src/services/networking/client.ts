import axios from 'axios';

export const axiosClient = axios.create({});

export const makeGetRequest = async (
  endpoint: string,
  data: {} | null = null,
) => {
  endpoint = endpoint + '&api_key=92b418e837b833be308bbfb1fb2aca1e';
  return axiosClient.get(endpoint, {
    params: data,
  });
};
