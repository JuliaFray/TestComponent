import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

export const personAPI = {
    getUsers() {
        return (
            instance
                .get(`persons`)
                .then(response => {
                    console.log(response.data)
                    return response.data
                })
        )
    },

    getUser(userId) {
        return (
            instance
                .get(`person/${userId}`)
                .then(response => {
                    return response
                })
        )
    },

    putUser(userId, userData) {
        return (
            instance
                .put(`person/${userId}`)
                .then(response => {
                    return response
                })
        )
    },

    postUser(userId, userData) {
        return (
            instance
                .post(`person/${userId}`)
                .then(response => {
                    return response
                })
        )
    }
}