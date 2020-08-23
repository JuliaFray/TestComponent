import React from 'react';
import css from './common.module.css';
import { NavLink } from 'react-router-dom';


const StartPage = (props) => {
    return (
        <div className = {css.starts}>
            <NavLink className = {css.start} to='/create'>Добавить нового сотрудника</NavLink>
            <NavLink className = {css.start} to='/persons'>Показать всех сотрудников</NavLink>
        </div>
    )
}

export default StartPage;
