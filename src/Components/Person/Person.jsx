import React from 'react';
import css from './Person.module.css'

const Person = ({ person }) => {
    return (

        <div className = {css.tbl}>
            {person.firstName + ' ' + person.lastName} 
            
        </div>

    )
}

export default Person; 