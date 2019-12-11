import axios from 'axios';
import bcrypt from 'bcryptjs';

const base = 'http://localhost:4000/user/';

export const userRegistration = data => {
    const password = data.Password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    data["Password"] = hash;

    return axios.post(`${base}register`, {data})
        .then(res => res)
        .catch(err => {
            console.log(err);
            
        })
}

export const userValidation = data => (
    axios.post(`${base}validateEmail`, data)
        .then(res => res.status)
)


export const userLogin = data => (
    axios.post(`${base}login`, data)
        .then (res => res.status)
        .catch(err => {
            console.log(err);            
        })
)

export const getUser = data =>(
    axios.get(`${base}getUser`, data)
        .then(res => res)
        .catch(err => {
            console.log(err);            
        })
)

function addUser(body) {
    return new Promise((resolve, reject) => {
        axios.post(`${base}register`, body)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
                console.log("error")
            })
    })
}
export default {
    addUser,
}