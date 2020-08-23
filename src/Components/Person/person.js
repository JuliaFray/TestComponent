import React from 'react';
import { NavLink } from 'react-router-dom';
import DeletePerson from '../Common/deletePerson';
import UpdatePerson from '../Common/updatePerson';
import css from './person.module.css';


const Person = ({ person, onDeleteUser, onUpdateUser }) => {

    return (
        <div className={css.row}>
            <div className = {css.col2}>
                <NavLink className={css.link} to={'/person/' + person.id}>
                    <div className={css.col}>
                        {person.firstName}
                    </div>
                    <div className={css.col}>
                        {person.lastName}
                    </div>
                </NavLink >
            </div>

            <div className={`${css.col} ${css.col2}`}>
                <DeletePerson onDeleteUser={onDeleteUser} person={person} />
            </div>
            <div className={`${css.col} ${css.update} ${css.col2}`}>
                <UpdatePerson onUpdateUser={onUpdateUser} person={person} />
            </div>
        </div>
    )
}

export default Person; 