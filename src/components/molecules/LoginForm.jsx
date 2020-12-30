import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
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
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const response = await axios.post('http://localhost:4000/login/signin', data);
        console.log(response);
    }

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
        </div>
    );
}

export default LoginForm;