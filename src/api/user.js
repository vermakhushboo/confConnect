import { hashPassword } from '../utils/hashUtils';
import { MakeApiCall } from '../api/apicall'

export const LoginUser = async (username, password) => {
    const response = await MakeApiCall({
        path: '/users/login',
        body: {
            username,
            password: await hashPassword(password),
        }
    });
    console.log(response);
    localStorage.setItem('authToken', response.data.authToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return response;
}