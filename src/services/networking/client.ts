import axios from 'axios';
import { API_KEY, BASE_PATH } from 'utils/constants';

export const axiosClient = axios.create({});

export const makeGetRequest = async (endpoint: string, data: {} | null = null) => {
  endpoint = BASE_PATH + endpoint + `api_key=${API_KEY}`;
  return axiosClient.get(endpoint, {
    params: data,
  });
};
