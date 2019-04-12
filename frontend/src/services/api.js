import axios from 'axios';

const api = axios.create({
    baseUrl: "https://crizu-box.herokuapp.com"
});

export default api;