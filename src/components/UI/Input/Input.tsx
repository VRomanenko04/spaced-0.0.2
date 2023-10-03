import React from 'react';
import styles from './Input.module.scss';

interface IInput {
    idNameHtmlFor: string
    type: string
    value: string
    labelText: string
    placeholder?: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ idNameHtmlFor, placeholder, type, value, labelText, handleChange }: IInput) => {
    return (
        <div className={styles.input__box}>
            <label htmlFor={idNameHtmlFor}>{labelText}</label>
            <input 
                id={idNameHtmlFor}
                type={type}
                placeholder={placeholder}
                name={idNameHtmlFor} 
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default Input