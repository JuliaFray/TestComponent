import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { getUser, updateUser } from '../Redux/person-reducer';
import CreatePersonForm from './createPersonForm';

class UpdatePersonComponent extends Component {

    constructor(props) {
        super(props);
        let person = { firstName: this.props.firstName, lastName: this.props.lastName, id: this.props.id };
        this.props.initializeData(person);
    }

    componentDidMount() {
        let currentPath = window.location.href;
        let id = currentPath.split('/');
        this.props.getUser(id[id.length - 1]);
    }

    onSubmit = (formData) => {
        let currentPath = window.location.href;
        let id = currentPath.split('/');

        let person = {firstName: formData.newFirstName, lastName: formData.newLastName, id: id[id.length - 1]}
        this.props.updateUser(person)
    };

    render() {
        return (
            <CreatePersonForm onSubmit = {this.onSubmit}
            firstName={this.props.firstName} lastName={this.props.lastName}
            />
        )
    }
};

let mapStateToProps = (state) => {
    return {
        firstName: state.persons.persons.firstName,
        lastName: state.persons.persons.lastName,
        id: state.persons.persons.id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initializeData: (person) => {
            dispatch(initialize('person', person))
        },
        updateUser: (person) => {
            console.log(person)
            dispatch(updateUser(person))
        },
        getUser: (id) => {
            dispatch(getUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePersonComponent);