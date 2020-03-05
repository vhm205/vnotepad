import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:1002/users',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json'
})
// https://api.github.com/users/mapbox

export const httpRegister = ({ name, email, password }) => {
    return instance.post('/register', { name, email, password })
                    .then(response => response)
}

export const httpLogin = ({ email, password }) => {
    return instance.post('/login', { email, password })
                    .then(response => response)
}

export const httpGetProfile = (token) => {
    return instance.get('/me', { headers: { 'Authorization' : token } })
                    .then(response => response)
}

export const httpLogout = (token) => {
    return instance.post('/me/logout', { }, { headers: { 'Authorization' : token } })
                    .then(response => response)
}