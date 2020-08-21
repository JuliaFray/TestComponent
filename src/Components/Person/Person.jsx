import React from 'react';
import css from './Person.module.css'
import DeletePerson from '../Common/DeletePerson';
import UpdatePerson from './../Common/UpdatePerson';


const Person = ({ person, onDeleteUser, onUpdateUser }) => {
    // console.log(onDeleteUser)
    return (
        <div className={css.tbl}>
            <table>
                <tr>
                    <td className = {css.col}>
                        {person.firstName}
                    </td>
                    <td>
                        {person.lastName}
                    </td>
                    <td>
                        <DeletePerson onDeleteUser={onDeleteUser} person={person} />
                    </td>
                    <td>
                        <UpdatePerson onUpdateUser={onUpdateUser} person={person} />
                    </td>
                </tr>
            </table>
        </div>

    )
}

export default Person; 