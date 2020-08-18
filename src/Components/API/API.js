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
                    return response.data
                })
        )
    },

    getUser(userId) {
        return (
            instance
                .get(`persons/${userId}`)
                .then(response => {
                    return response
                })
        )
    },

    updateUser(userId, {newFirstName, newLastName}) {
        return (
            instance
                .put(`persons/${userId}`, {firstName: newFirstName, lastName: newLastName})
                .then(response => {
                    console.log(response)
                    return response
                })
        )
    },

    addUser(userId, {newFirstName, newLastName}) {
        console.log(userId, {newFirstName, newLastName})
        return (
            instance
                .post(`persons/${userId}`, {firstName: newFirstName, lastName: newLastName})
                .then(response => {
                    return response
                })
        )
    },

    deleteUser(userId) {
        console.log(userId);
        return (
            instance
                .delete(`persons/${userId}`)
                .then(response => {
                    console.log(userId);
                    return response
                })
        )
    }
}