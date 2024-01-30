import axios from 'axios';
import { DIR } from './config';

const axiosInstance = axios.create({ baseURL: DIR + '/api' });

export default axiosInstance;
