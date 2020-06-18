import axios from 'axios'
export const api= axios.create({
    baseURL: 'http://localhost:puerto',
    timeout: 20000
})
