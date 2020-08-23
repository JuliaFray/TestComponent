import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteUser, getUsers, updateUser } from '../Redux/person-reducer';
import Persons from './persons';

class PersonsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.users.persons.length != this.props.users.persons.length) {
            this.props.getUsers();
        }
    }

    render() {
        return (
            <div>
                <Persons 
                users = {this.props.users} 
                deleteUser = {this.props.deleteUser} 
                updateUser = {this.props.updateUser} />

            </div>
        )
    }

};

let mapStateToProps = (state) => {
    return {
        users: state.persons
    }
};

export default compose(
    connect(mapStateToProps, {getUsers, deleteUser, updateUser})
)(PersonsContainer);