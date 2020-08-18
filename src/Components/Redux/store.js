
import personReducer from './person-reducer';
import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    persons: personReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;