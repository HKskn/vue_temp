import axios from 'axios';

let token = localStorage.getItem('token');

let config = {
    timeout: 20000,
    headers: {
      Authentication: token
    },
    baseURL: 'http://localhost:7777'
};

try {
    if (process && process.env.NODE_ENV === 'development') {
        config.baseURL = window.location.host === 'localhost:8080' ? 'http://localhost:7777' : 'http://10.0.2.2:7777';
    }
} catch(err){}

export default axios.create(config);
