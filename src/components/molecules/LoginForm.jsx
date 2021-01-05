import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './LoginForm.scss';
import FailureSnackbar from '../atoms/FailureSnackbar';
import InputText from '../atoms/InputText';
import LoginBtn from '../atoms/LoginBtn';
import * as Constants from './../../constants/Constants';

const useStyles = makeStyles((theme) => ({
    input: {
        backgroundColor: '#ffffff',
        marginBottom: '15px'
    }
}));

function LoginForm() {
    let history = useHistory();
    const classes = useStyles();
    const { register, handleSubmit, setValue } = useForm();
    const [ open, setOpen ] = useState(false);

    const onSubmit = async (data) => {
        await axios
            .post(`${Constants.LOGIN_URL}/signin`, data)
            .then((response) => {
                console.log('Login succeed.');

                const { data: { access_token }} = response;
                window.sessionStorage.setItem('access_token', access_token);
                history.push('/home');
            })
            .catch((error) => {
                console.log('There was an exception while login.');

                setOpen(true);
                setValue("username", "");
                setValue("password", "");
            });
    };

    return (
        <div id="loginForm">
            <InputText
                className={classes.input}
                id="inputUsername"
                label="username"
                name="username"
                inputRef={register} />
            <InputText
                className={classes.input}
                id="inputPwd"
                label="password"
                name="password"
                inputRef={register} />
            <LoginBtn
                id="loginBtn"
                onClick={handleSubmit(onSubmit)} />
            <FailureSnackbar
                open={open}
                setOpen={setOpen} />
        </div>
    );
}

export default LoginForm;