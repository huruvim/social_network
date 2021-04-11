import React, {FC} from 'react'
import styles from './FormsControls.module.css'

export const FormControl: React.FC<any> = ({input, meta, ...props}) => {
    const isError = meta.error && meta.touched
    return (
        <div className={`${styles.formControl} ${isError && styles.error}`}>
            <div>
                {props.children}
            </div>
            <span>
                {isError && meta.error}
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