import React from 'react';


const UpdatePerson = ( {person, onUpdateUser} ) => {
    return (
        <div>
            <button onClick = {() => { onUpdateUser(person.id)} } >Update</button>
        </div>
    )
}

export default UpdatePerson;
