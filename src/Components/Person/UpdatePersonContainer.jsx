import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { updateUser, getUser } from '../Redux/person-reducer';
import UpdatePersonForm from './UpdatePersonForm';





class UpdatePersonComponent extends React.Component {

    constructor(props) {
        super(props);
        let person = { firstName: this.props.firstName, lastName: this.props.lastName, id: this.props.id };
        this.props.initializeData(person);
        // console.log(person)
    }

    handleSubmit = (values) => {
        console.log(this.props);
        console.log(values.value);
        debugger
        // this.props.updateUser(values)
    };



    render() {

        return (
            <div>
                <UpdatePersonForm handleSubmit={this.handleSubmit} />
            </div>

        )
    }
};

const mapStateToProps = (state) => ({
    id: state.persons.id
});

const mapDispatchToProps = (dispatch) => {
    return {
        initializeData: (person) => {
            dispatch(initialize('updatePerson', person))
        },
        updateUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePersonComponent);