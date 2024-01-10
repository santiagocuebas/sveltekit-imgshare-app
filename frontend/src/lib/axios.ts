import axios from 'axios';
import { DIR } from './config';

const axiosInstance = axios.create({
  baseURL: DIR + '/api',
  method: 'GET',
  withCredentials: true
});

export default axiosInstance;
