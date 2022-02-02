import axios from 'axios';
import { Config } from '../utils';

const fetcher = axios.create({
  baseURL: Config.API_URI,
  responseType: 'json',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${Config.AUTH_TOKEN}`,
  },
});

export { fetcher };
