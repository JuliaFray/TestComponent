import React from 'react';
import css from './Common.module.css'


const UpdatePerson = ( {person, onUpdateUser} ) => {
    return (
        <div>
            <button className = {`${css.btn} ${css.update}`} onClick = {() => { onUpdateUser(person.id)} } >U</button>
        </div>
    )
}

export default UpdatePerson;
