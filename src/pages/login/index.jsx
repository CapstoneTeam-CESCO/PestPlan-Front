import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import 'src/templates/login/styles.scss';
import Title from 'src/components/atoms/title';
import LoginForm from 'src/components/organisms/loginForm';
import ASnackbar from 'src/components/atoms/snackbar';
import * as Constants from 'src/constants/Constants';

const useStyles = makeStyles(() => ({
    input: {
        backgroundColor: '#ffffff',
        marginBottom: '15px',
    },
}));

function LoginPage() {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, setValue, getValues } = useForm();
    const classes = useStyles();
    const history = useHistory();

    const onSubmit = async () => {
        const values = getValues();
        await axios
            .post(
                `${Constants.SERVER_URL}${Constants.LOGIN_PATH}/signin`,
                values
            )
            .then(response => {
                console.log('Login succeed.');

                const { data } = response;
                window.sessionStorage.setItem(
                    'access_token',
                    data.access_token
                );
                history.push('/home');
            })
            .catch(exception => {
                console.log('There was an exception while login.');
                console.log(exception);

                setOpen(true);
                setValue('username', '');
                setValue('password', '');
            });
    };

    const titleProps = {
        className: 'login__team-name',
        children: 'Pest Plan',
    };

    const loginFormProps = {
        className: 'login-form',
        firstInputTextProps: {
            className: classes.input,
            label: 'username',
            name: 'username',
            inputRef: register,
            variant: 'outlined',
        },
        secondInputTextProps: {
            className: classes.input,
            label: 'password',
            name: 'password',
            inputRef: register,
            variant: 'outlined',
        },
        buttonProps: {
            type: 'submit',
            children: 'LOGIN',
            className: 'button--root login-button',
            onClick: () => handleSubmit(onSubmit()),
        },
    };

    return (
        <div className="login">
            <Title {...titleProps} />
            <LoginForm {...loginFormProps} />
            <ASnackbar
                open={open}
                setOpen={setOpen}
                autoHideDuration={1000}
                message="Invalid username or password"
            />
        </div>
    );
}

export default LoginPage;
