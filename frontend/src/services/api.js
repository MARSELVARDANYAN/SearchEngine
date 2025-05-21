import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:10000'
});


export const fetchUrl = (queri) => api.get(`api/poisk?q=${queri}`);
