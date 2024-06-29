import axios from 'axios'
import {Config} from '../config/config'
import { useNavigateContext } from '../utils/navigateContext';

const BASE_URL = Config.BACKEND_BASE_URI;
const authToken = localStorage.getItem('authToken');
const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        const navigate = useNavigateContext();
        navigate('/');
      }
      return Promise.reject(error);
    }
);

export const MakeApiCall = async ({ baseUrl, path, params, body, headers, method = 'post' }) => {
    if(!baseUrl) {
        baseUrl = BASE_URL;
    }
    const completeUrl = `${baseUrl}${path}`;
    return await axiosInstance({
        method: method,
        url: completeUrl,
        data: body,
        params: params,
        headers: {
            'x-auth-token': authToken,
            ...headers
        }
    })
}