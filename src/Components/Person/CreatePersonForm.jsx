import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls';
import css from './Person.module.css';
import { requiredField } from './../Common/Validator'

const CreatePerson = ({ handleSubmit }) => {

    console.log([requiredField])

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <Field placeholder={'Enter firstname'} component={Input} name={'newFirstName'}
                validate={[requiredField]}
                type={'text'} />

            <Field placeholder={'Enter lastname'} component={Input} name={'newLastName'}
                validate={[requiredField]}
                type={'text'} />
            <div>
                {/* <button type={'reset'} >Очистить форму</button> */}
                <button type={'submit'} >Отправить данные</button>
            </div>
        </form>
    )

};

const CreatePersonForm = reduxForm({
    form: 'person'
})(CreatePerson);

export default CreatePersonForm;