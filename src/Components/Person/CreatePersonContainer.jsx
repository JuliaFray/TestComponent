import CreatePersonRedux from './CreatePerson';
import {connect} from 'react-redux';
import { addNewUser, updateFieldSucces } from '../Redux/person-reducer';

let mapStateToProps = (state) => {
    return {
        newFirstName : state.persons.firstName,
        newLastName : state.persons.lastName
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddUser : () => {dispatch(addNewUser())},
        updateField : (newFirstName, newLastName) => {dispatch(updateFieldSucces(newFirstName, newLastName))}
    }
};

const CreatePersonContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePersonRedux)

export default CreatePersonContainer;