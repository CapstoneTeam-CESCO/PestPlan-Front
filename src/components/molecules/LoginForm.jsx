import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './LoginForm.scss';
import InputText from '../atoms/InputText';
import LoginBtn from '../atoms/LoginBtn';
import FailureSnackbar from '../atoms/FailureSnackbar';

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
            .post('http://localhost:4000/login/signin', data)
            .then((response) => {
                console.log(response);
                
                history.push('/main');
            })
            .catch((error) => {
                console.log(error.toJSON());

                setOpen(true);
                setValue("username", "");
                setValue("password", "");
            });
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
            <FailureSnackbar
                open={open}
                setOpen={setOpen} />
        </div>
    );
}

export default LoginForm;