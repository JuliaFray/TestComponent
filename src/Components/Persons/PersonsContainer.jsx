import React from 'react';
import { getUsers } from './../Redux/person-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Persons from './Persons'

class PersonsContainer extends React.Component {

    componentDidMount() {
        // debugger
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <Persons users = {this.props.users} />
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
    connect(mapStateToProps, {getUsers})
)(PersonsContainer);