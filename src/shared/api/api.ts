import axios from 'axios';

export const $api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: 'ddd',
    },
});