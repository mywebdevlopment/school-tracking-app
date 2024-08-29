// src/axios.js (if you have a custom Axios instance)
import axios from 'axios';


const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default instance;
