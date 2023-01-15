import axios, { AxiosRequestConfig } from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const config : AxiosRequestConfig = {
    baseURL : "/api/",
    httpsAgent : httpsAgent,
    
}

export const client = axios.create(config);

