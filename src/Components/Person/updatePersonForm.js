import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/formsControls';
import { requiredField } from '../Common/validator';
import css from './Person.module.css';

const UpdatePerson = ({ handleSubmit, firstName, lastName }) => {

    return (
        <form className={` ${css.form} ${css.update}`} handleSubmit={handleSubmit}>
            <Field component={Input} name={'firstName'} value={firstName}
                validate={[requiredField]} type={'text'} />

            <Field component={Input} name={'lastName'} value={lastName}
                validate={[requiredField]}
                type={'text'} />
            <div>
                <button type={'submit'} >Отправить данные</button>
            </div>
        </form>
    )
};

const UpdatePersonForm = reduxForm({
    form: 'updatePerson'
})(UpdatePerson);

export default UpdatePersonForm;
