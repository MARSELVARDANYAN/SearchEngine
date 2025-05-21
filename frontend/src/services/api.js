import axios from 'axios';

export const api = axios.create({
    baseURL: 'api'
});


export const fetchUrl = (queri) => api.get(`api/poisk?q=${queri}`);
