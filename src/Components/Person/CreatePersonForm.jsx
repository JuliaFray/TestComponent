import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls';
import css from './Person.module.css';

const CreatePerson = ({handleSubmit}) => {

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <Field placeholder={'Enter first name'} component={Input} name={'newFirstName'}
                // validate = {[requiredField]} 
                type={'text'} />

            <Field placeholder={'Enter second name'} component={Input} name={'newLastName'}
                // validate = {[requiredField]} 
                type={'text'} />
            <div>
                <button type={'button'} >Очистить форму</button>
                <button type={'submit'} >Отправить данные</button>
            </div>
        </form>
    )

};

const CreatePersonForm = reduxForm({
    form: 'person'
})(CreatePerson);

export default CreatePersonForm;