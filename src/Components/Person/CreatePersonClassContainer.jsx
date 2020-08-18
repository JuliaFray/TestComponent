import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addNewUser } from '../Redux/person-reducer';
import CreateClass from './CreatePersonClass';

class CreateClassContainer extends React.Component {
    
    render() {
        // console.log(this.props)
        return <>
            < CreateClass sendUser = {this.props.sendUser} persons = {this.props.persons} />
        </>
    }
}

let mapStateToProps = (state) => ({
    persons: state.persons
})

let mapDispatchToProps = (dispatch) => ({
    sendUser: ({newFirstName, newLastName}) => {
        dispatch(addNewUser({newFirstName, newLastName}))
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CreateClassContainer);