import { personAPI } from './../API/API.js';

const ADD_USER = 'ADD-USER';
const UPDATE_USER = 'UPDATE-USER';
const SET_USER = 'SET-USER';
const SHOW_USERS = 'SHOW-USERS';

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

        default:
            return state;
    }
};

export default personReducer;

// actionCreator
export const addNewUser = (newFirstName, newLastName) => ({ type: ADD_USER, newFirstName, newLastName });
export const updateUser = (persons) => ({ type: UPDATE_USER, persons });
export const setUser = (persons) => ({ type: SET_USER, persons });
export const showUsers = () => ({type : SHOW_USERS})

// thunkCreator
export const getUsers = () => async (dispatch) => {
    let response = await personAPI.getUsers();
    console.log(response);
    dispatch(setUser(response));
    
    // debugger
};