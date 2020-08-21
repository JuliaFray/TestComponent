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
        console.log(userId)
        return (
            instance
                .get(`persons/${userId}`)
                .then(response => {
                    console.log(response)
                    return response.data
                })
        )
    },

    updateUser({ id, newFirstName, newLastName }) {
        console.log({ id, newFirstName, newLastName })
        debugger
        return (
            instance
                .put(`persons/${id}`, { firstName: newFirstName, lastName: newLastName, id: id })
                .then(response => {
                    console.log(response.data)
                    return response.data
                })
        )
    },

    addUser({ newFirstName, newLastName }) {
        console.log({ newFirstName, newLastName })
        return (
            instance
                .post(`persons`, { firstName: newFirstName, lastName: newLastName })
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