import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormsControls';
import css from './Person.module.css'

const CreatePerson = (props) => {
    return (
        <form className = {css.form}>
            <Field placeholder = {'enter first name'} component = {Input} name = {'firstName'} 
            // validate = {[requiredField]} 
            />

            <Field placeholder = {'enter second name'} component = {Input} name = {'firstName'} 
            // validate = {[requiredField]} 
            />

            <button>Send</button>
        </form>
    )
};

const CreatePersonRedux = reduxForm ({
    form: 'person'
})(CreatePerson);

export default CreatePersonRedux;