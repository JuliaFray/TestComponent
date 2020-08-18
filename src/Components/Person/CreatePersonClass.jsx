import React from 'react';
import CreatePersonContainer from './CreatePersonContainer';

const CreateClass = React.memo(props => {
    // console.log(props)
    let CreatePerson = (values) => {
        props.sendUser(values.person)
    }

    return (
        <CreatePersonContainer onSubmit = {CreatePerson} />
    )
})

export default CreateClass;