import axios from 'axios';
import { DIR } from './config';

const axiosInstance = axios.create({
  baseURL: DIR + '/api',
  method: 'GET',
  proxy: false,
  withCredentials: true
});

export default axiosInstance;
