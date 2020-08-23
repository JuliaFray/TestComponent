import React from 'react';
import StyleSheet from './formsControls.module.css';

export const Input = ({ input, meta, child, element, ...props }) => {
    const showError = meta.touched && meta.error;

    return (
        <div className={showError ? StyleSheet.error : ''}>
            <div>
                <input {...input} {...props} />
            </div>
            {showError && <span>{meta.error}</span> || meta.warning && <span>{meta.warning} </span>}
        </div>
    )
};