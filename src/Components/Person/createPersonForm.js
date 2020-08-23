import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/formsControls';
import { requiredField } from '../Common/validator';
import css from './person.module.css';

const CreatePerson = ({ handleSubmit, firstName, lastName }) => {

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <Field 
            placeholder={firstName ? firstName : 'Введите имя сотрудника'} 
            component={Input} name={'newFirstName'}
            validate={[requiredField]} type={'text'}  />

            <Field 
            placeholder={lastName ? lastName : 'Введите фамилию сотрудника'} 
            component={Input} name={'newLastName'} validate={[requiredField]} 
            value={lastName} type={'text'} />

            <div>
                <button>Сохранить</button>
            </div>
        </form>
    )

};

const CreatePersonForm = reduxForm({
    form: 'person'
})(CreatePerson);

export default CreatePersonForm;