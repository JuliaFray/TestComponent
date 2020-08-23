import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../Redux/person-reducer';
import css from './../Person/person.module.css';

class UpdatePerson extends React.Component {

    render() {  
        return (
            <NavLink className = {css.update} to={'/update/' + this.props.person.id} >U</NavLink>
        )
    }
};

let mapStateToProps = (state) => ({
    newFirstName: state.persons.firstName
})


export default connect(mapStateToProps, { getUser })(UpdatePerson);
