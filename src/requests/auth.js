import axios from 'axios';
import stores from '../stores';

const instance = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API_URL,
});

// http request interceptors
instance.interceptors.request.use(config => {
  const token = stores.getState().user.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// http response interceptors

export default instance;
