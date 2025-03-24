import axios from 'axios';
import { BASEURL } from './url';
import { attachResponseInterceptor } from './ResponseInterceptor';
import { attachRequestInterceptor } from './RequestInterceptor';


const ApiClient = axios.create({
    baseURL: BASEURL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },

});

attachResponseInterceptor(ApiClient);
attachRequestInterceptor(ApiClient);

export default ApiClient;