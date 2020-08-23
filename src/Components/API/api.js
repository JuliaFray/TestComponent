import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    credentials: 'include'
});

export const personAPI = {
    getUsers() {
        return (
            instance
                .get(`persons`)
                .then(response => {
                    if (response.status === 200) {
                        return response.data
                    } 
                })
        )
    },

    getUser(userId) {
        return (
            instance
                .get(`persons/${userId}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.data
                    }

                })
        )
    },

    updateUser(person) {
        let userId = person.id;
        return (
            instance
                .put(`persons/${userId}`, person)
                .then(response => {
                    return response.data
                })
        )
    },

    addUser({ newFirstName, newLastName }) {
        return (
            instance
                .post(`persons`, { firstName: newFirstName, lastName: newLastName })
                .then(response => {
                    return response
                })
        )
    },

    deleteUser(userId) {
        return (
            instance
                .delete(`persons/${userId}`)
                .then(response => {
                    return response
                })
        )
    }
}