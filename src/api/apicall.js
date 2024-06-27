import axios from 'axios'
import {Config} from '../config/config'
const BASE_URL = Config.BACKEND_BASE_URI;
const authToken = localStorage.getItem('authToken');
export const MakeApiCall = async ({ baseUrl, path, params, body, headers }) => {
    if(!baseUrl) {
        baseUrl = BASE_URL;
    }
    const completeUrl = `${baseUrl}${path}`;
    return await axios({
        method: 'post',
        url: completeUrl,
        data: body,
        params: params,
        headers: {
            'x-auth-token': authToken,
            ...headers
        }
    })
}