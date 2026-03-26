import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fiap-bff-2502.onrender.com',
});

export default api;