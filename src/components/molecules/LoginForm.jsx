import React from 'react';
import  { makeStyles } from '@material-ui/core/styles';

import './LoginForm.scss';
import InputText from '../atoms/InputText';
import LoginBtn from '../atoms/LoginBtn';

const useStyles = makeStyles((theme) => ({
    input: {
        backgroundColor: '#ffffff',
        marginBottom: '15px'
    }
}));


function LoginForm() {
    const classes = useStyles();

    return (
        <div id="loginForm">
            <InputText
                className={classes.input}
                id="inputID"
                label="id" />
            <InputText
                className={classes.input}
                id="inputPwd"
                label="password" />
            <LoginBtn
                id="loginBtn" />
        </div>
    );
}

export default LoginForm;