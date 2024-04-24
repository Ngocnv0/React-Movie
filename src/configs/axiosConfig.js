import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000', // replace with your base URL
    timeout: 10000, // specify the timeout
    headers: {'X-Custom-Header': 'foobar'} // add any custom headers if needed
});

export default instance;