import axios from 'axios';

export const axiosClient = axios.create({});
export const axiosAuthClient = axios.create({});

export const makePostRequest = async (
  endpoint: string,
  data: {} | null = {},
) => {
  if (data === null) {
    return axios.post(endpoint);
  }
  return axios.post(endpoint, data);
};

export const makePutRequest = async (
  endpoint: string,
  data: {} | null = {},
) => {
  if (data === null) {
    return axiosClient.put(endpoint);
  }
  return axiosClient.put(endpoint, data);
};

export const makeGetRequest = async (
  endpoint: string,
  data: {} | null = null,
) => {
  return axiosClient.get(endpoint, {
    params: data,
  });
};
