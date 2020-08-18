import { personAPI } from './../API/API.js';

const ADD_USER = 'ADD-USER';
const UPDATE_USER = 'UPDATE-USER';
const SET_USER = 'SET-USER';
const SHOW_USERS = 'SHOW-USERS';
const UPDATE_FIELD = 'UPDATE-FIELD'

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

        case SET_USER:
            return {
                ...state,
                persons: action.persons
            };

        case SHOW_USERS:
            return {
                ...state,
                persons: action.persons
            };

        case UPDATE_FIELD:
            let updatedUser = {
                id: action.id,
                firstName: action.newFirstName,
                lastName: action.newLastName
            }

            return {
                ...state,
               persons: [...state.persons, updatedUser]
    
            };

        default:
            return state;
    }
};

export default personReducer;

// actionCreator
export const addNewUserSucces = (newFirstName, newLastName) => ({ type: ADD_USER, firstName: newFirstName, lastName: newLastName });
export const updateUserSucces = (persons) => ({ type: UPDATE_USER, persons });
export const setUserSucces = (persons) => ({ type: SET_USER, persons });
export const updateFieldSucces = (newFirstName, newLastName) => ({ type: UPDATE_FIELD, firstName: newFirstName, lastName: newLastName })

// thunkCreator
export const getUsers = () => async (dispatch) => {
    let response = await personAPI.getUsers();
    // console.log(response);
    dispatch(setUserSucces(response));
};

export const deleteUser = (userId) => async (dispatch) => {
    let response = await personAPI.deleteUser(userId);
    dispatch(getUsers());
}

export const updateUser = (userId, {newFirstName, newLastName}) => async (dispatch) => {
    let response = await personAPI.updateUser(userId, {newFirstName, newLastName});
    dispatch(setUserSucces(response));
    dispatch(getUsers());
}

export const addNewUser = ({newFirstName, newLastName}) => async (dispatch) => {
    debugger
    console.log({newFirstName, newLastName})
    let response = await personAPI.addUser({newFirstName, newLastName});
    dispatch(setUserSucces(response));
    dispatch(getUsers());
}