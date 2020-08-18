import React from 'react';


const DeletePerson = ( {person, onDeleteUser} ) => {
    return (
        <div>
            <button onClick = {() => { onDeleteUser(person.id)} } >Delete</button>
        </div>
    )
}

export default DeletePerson;
