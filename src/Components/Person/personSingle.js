import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, getUser, updateUser } from '../Redux/person-reducer';
import Person from './person';

const PersonSingle = (props) => {
    console.log(props)
    return (
        <div>
            <Person person={props} onDeleteUser={props.onDeleteUser}
                onUpdateUser={props.onUpdateUser} />
        </div>
    )
};

class PersonSingleContainer extends React.Component {

    componentDidMount() {
        let currentPath = window.location.href;
        let id = currentPath.split('/');
        this.props.getUser(id[id.length - 1]);
        // console.log(this.props)
    }

    render() {
        return <PersonSingle firstName={this.props.firstName} lastName={this.props.lastName} id={this.props.id}
            onDeleteUser={this.props.deleteUser}
            onUpdateUser={this.props.updateUser} />
    }
}

let mapStateToProps = (state) => {
    return {
        firstName: state.persons.persons.firstName,
        lastName: state.persons.persons.lastName,
        id: state.persons.persons.id
    }
};

export default connect(mapStateToProps, { getUser, deleteUser, updateUser })(PersonSingleContainer);