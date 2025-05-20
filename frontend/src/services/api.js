import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:4000'
});


export const fetchUrl = (queri) => api.get(`api/poisk?q=${queri}`);
