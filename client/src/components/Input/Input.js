import React from 'react';
import { makeStyles } from '@material-ui/core';


function Input({ children, type, placeholder, minLength }) {
    const classes = useStyles()
    return (
        <div>
            <label className={classes.label}>{children}</label>
            <input
                type={type}
                minLength={minLength}
                placeholder={placeholder}
                className={classes.loginInput}
                autoFocus
            />
        </div >
    )
}

export default Input;

const useStyles = makeStyles((theme) => ({
    loginInput: {
        padding: '1.2rem',
        fontSize: '1rem',
        width: '90%',
        border: 'none',
        borderRadius: '5px',
        '&:focus': {
            outline: 'none',
        },
    }
}));


