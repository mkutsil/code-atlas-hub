import axios from 'axios';
import { AUTH_TOKEN_KEY } from 'shared/const/localstorage';

const $api = axios.create({
    baseURL: API_URL,
});

$api.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem(AUTH_TOKEN_KEY);

        if (authToken) {
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export { $api };
