import React from 'react';
import { getUsers, deleteUser, updateUser } from './../Redux/person-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Persons from './Persons'

class PersonsContainer extends React.Component {

    componentDidMount() {
        // debugger
        this.props.getUsers();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps)
        // console.log(this.props)
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