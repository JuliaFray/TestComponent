import React from 'react';
import css from './Common.module.css'


const DeletePerson = ( {person, onDeleteUser} ) => {
    return (
        <div>
            <button className = {`${css.btn} ${css.delete}`} onClick = {() => { onDeleteUser(person.id)} } >D</button>
        </div>
    )
}

export default DeletePerson;
