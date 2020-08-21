import { personAPI } from './../API/API.js';

const ADD_USER = 'ADD-USER';
const UPDATE_USER = 'UPDATE-USER';
const SET_USERS = 'SET-USERS';
const SET_USER = 'SET-USER';

const initialState = {
    persons: [
        { id: 1, firstName: 'Dave', lastName: 'h' },
        { id: 2, firstName: 'Dove', lastName: 'h' }
    ]
};

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            let newUser = {
                id: 3,
                firstName: action.newFirstName,
                lastName: action.newLastName
            }
            return {
                ...state,
                persons: [...state.persons, newUser]
            };

        case UPDATE_USER:
            return {
                ...state,
                persons: action.persons
            };

        case SET_USERS:
            return {
                ...state,
                persons: action.persons
            };

        case SET_USER:
            // debugger
            return {
                ...state
            };

        default:
            return state;
    }
};

export default personReducer;

// actionCreator
export const addNewUserSucces = (persons) => ({ type: ADD_USER, persons });
export const updateUserSucces = (persons) => ({ type: UPDATE_USER, persons });
export const setUsersSucces = (persons) => ({ type: SET_USERS, persons });
export const setUserSucces = (persons) => ({ type: SET_USER, persons });

// thunkCreator
export const getUsers = () => async (dispatch) => {
    let response = await personAPI.getUsers();
    dispatch(setUsersSucces(response));
};

export const getUser = (userId) => async (dispatch) => {
    let response = await personAPI.getUser(userId);
    // debugger
    dispatch(setUserSucces(response));
    dispatch(getUsers());
};

export const deleteUser = (userId) => async (dispatch) => {
    let response = await personAPI.deleteUser(userId);
    dispatch(getUsers());
}

export const updateUser = ( {id, firstName, lastName}) => async (dispatch) => {
    console.log(firstName, lastName)
    // dispatch(getUsers(id));
    debugger
    let response = await personAPI.updateUser( {id, firstName, lastName});
    dispatch(setUserSucces(response));
    dispatch(getUsers());
}

export const addNewUser = ({ newFirstName, newLastName }) => async (dispatch) => {
    // console.log({newFirstName, newLastName})
    let response = await personAPI.addUser({ newFirstName, newLastName });
    console.log(response)
    dispatch(addNewUserSucces(response.data));
    dispatch(getUsers());
}