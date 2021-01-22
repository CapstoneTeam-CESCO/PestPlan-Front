import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import '../../templates/login/styles.scss';
import Title from '../../components/atoms/title';
import LoginForm from '../../components/organisms/loginForm';
import ASnackbar from '../../components/atoms/snackbar';
import * as Constants from '../../constants/Constants';

const useStyles = makeStyles(() => ({
    input: {
        backgroundColor: '#ffffff',
        marginBottom: '15px'
    }
}));

function LoginPage() {
    const [ open, setOpen ] = useState(false);
    const { register, handleSubmit, setValue, getValues } = useForm();
    const classes = useStyles();
    let history = useHistory();

    const onSubmit = async () => {
        const values = getValues();
        await axios
            .post(`${Constants.LOGIN_URL}/signin`, values)
            .then((response) => {
                console.log('Login succeed.');

                const { data: { access_token }} = response;
                window.sessionStorage.setItem('access_token', access_token);
                history.push('/home');
            })
            .catch((exception) => {
                console.log('There was an exception while login.');
                console.log(exception);

                setOpen(true);
                setValue("username", "");
                setValue("password", "");
            });
    };

    const loginFormProps = {
        className: "login-form",
        firstInputText: {
            className: classes.input,
            label: "username",
            name: "username",
            inputRef: register,
            variant: "outlined",
        },
        secondInputText: {
            className: classes.input,
            label: "password",
            name: "password",
            inputRef: register,
            variant: "outlined",
        },
        button: {
            className: "button--root login-button",
            onClick: () => handleSubmit(onSubmit()),
            children: "LOGIN",
        },
    };

    return (
        <div className="login">
            <Title
                className="login__team-name"
                children="Pest Plan" />
            <LoginForm
                loginFormProps={loginFormProps} />
            <ASnackbar
                open={open}
                setOpen={setOpen}
                autoHideDuration="1000"
                message="Invalid username or password" />
        </div>
    );
}

export default LoginPage;