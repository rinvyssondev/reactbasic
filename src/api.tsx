import axios from 'axios';

const apiUrl = 'http://192.168.0.13:8080'

const api = axios.create({
    baseURL: apiUrl    
})

export default api