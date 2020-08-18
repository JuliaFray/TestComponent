import React from 'react';
import css from './Person.module.css'
import DeletePerson from '../Common/DeletePerson';
import UpdatePerson from './../Common/UpdatePerson'

const Person = ({ person, onDeleteUser, onUpdateUser }) => {
    // console.log(onDeleteUser)
    return (

        <div className = {css.tbl}>
            {person.firstName + ' ' + person.lastName} 
            <DeletePerson onDeleteUser = {onDeleteUser} person = {person} />
            <UpdatePerson onUpdateUser = {onUpdateUser} person = {person} />
        </div>

    )
}

export default Person; 