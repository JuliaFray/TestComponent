import CreatePersonRedux from './CreatePerson';
import {connect} from 'react-redux';
import { addNewUser } from '../Redux/person-reducer';

let mapStateToProps = (state) => {
    return {
        newFirstName : state.persons.newFirstName,
        newLastName : state.persons.newLastName
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewUser : (newFirstName, newLastName) => {dispatch(addNewUser(newFirstName, newLastName))}
    }
};

const CreatePersonContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePersonRedux)

export default CreatePersonContainer;