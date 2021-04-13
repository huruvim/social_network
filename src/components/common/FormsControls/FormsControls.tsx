import React from 'react'
import styles from './FormsControls.module.css'
import {Field, Validator} from "redux-form";

export const FormControl: React.FC<any> = ({meta: {error, touched}, children}) => {
    const isError = error && touched
    return (
        <div className={`${styles.formControl} ${isError && styles.error}`}>
            <div>
                {children}
            </div>
            <span>
                {isError && error}
            </span>
        </div>
    )
}


export const Textarea: React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField =
    (name: string, validators: Validator[], component: React.FC, placeholder: string | null, props: unknown = {}, text: string = "") => (
    <div>
        <Field name={name}
               validate={validators}
               component={component}
               placeholder={placeholder}
               {...props}
        /> {text}
    </div>
)