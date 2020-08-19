import React from 'react';
import CreatePersonForm from './CreatePersonForm';
import { connect } from 'react-redux';
import {addNewUser} from './../Redux/person-reducer';

const CreatePersonComponent = (props) => {

    const onSubmit = (formData) => {
        // console.log(formData);
        props.addNewUser(formData)
    }

    return (
        <div>
            <CreatePersonForm onSubmit={onSubmit} />
        </div>
    )

};

let mapStateToProps = (state) => ({
    firstName : state.persons.firstName,
    lastName : state.persons.lastName
});



export default connect(mapStateToProps, {addNewUser})(CreatePersonComponent);