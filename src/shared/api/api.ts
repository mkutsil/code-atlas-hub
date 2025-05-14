import axios from 'axios';
import { AUTH_DATA_KEY } from 'shared/const/localstorage';

const $api = axios.create({
    baseURL: API_URL,
});

$api.interceptors.request.use(
    (config) => {
        const authData = localStorage.getItem(AUTH_DATA_KEY);

        if (authData) {
            config.headers['Authorization'] = `Bearer ${JSON.parse(authData).token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export { $api };
