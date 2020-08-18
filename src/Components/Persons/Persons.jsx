import React from 'react';
import Person from './../Person/Person'

const Persons = (props) => {
    // console.log(props)
    return (
        <div>
            {props.users.persons.map(p => <Person 
            person = {p} 
            onDeleteUser = {props.deleteUser} 
            onUpdateUser = {props.updateUser} />)}
        </div>
    )
}

export default Persons;