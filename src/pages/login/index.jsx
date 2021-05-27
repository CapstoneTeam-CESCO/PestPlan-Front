import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import 'src/templates/login/styles.scss';
import Image from 'src/components/atoms/image';
import LoginForm from 'src/components/organisms/loginForm';
import ASnackbar from 'src/components/atoms/snackbar';
import * as Constants from 'src/constants/Constants';
import LogoImage from 'src/images/logo--blue.png';

function LoginPage() {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, setValue, getValues } = useForm();
    const history = useHistory();

    const onSubmitSignIn = async () => {
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
                history.push(Constants.HOME_PATH);
            })
            .catch(exception => {
                console.log('There was an exception while login.');
                console.log(exception);

                setOpen(true);
                setValue('username', '');
                setValue('password', '');
            });
    };

    const onSubmitSignUp = async () => {
        const values = getValues();
        try {
            await axios.post(
                `${Constants.SERVER_URL}${Constants.LOGIN_PATH}/signup`,
                values
            );
        } catch (exception) {
            setOpen(true);
            setValue('username', '');
            setValue('password', '');
        }
    };

    const logoProps = {
        src: LogoImage,
        alt: Constants.TEAM_NAME,
    };

    const loginFormProps = {
        className: 'login-form',
        usernameProps: {
            className: 'login-form__username',
            label: 'username',
            name: 'username',
            inputRef: register,
        },
        passwordProps: {
            className: 'login-form__password',
            label: 'password',
            name: 'password',
            inputRef: register,
        },
        signInProps: {
            type: 'submit',
            children: Constants.SIGN_IN,
            className: 'login-button',
            onClick: () => handleSubmit(onSubmitSignIn()),
        },
        signUpProps: {
            type: 'submit',
            children: Constants.SIGN_UP,
            className: 'login-button',
            onClick: () => handleSubmit(onSubmitSignUp()),
        },
    };

    return (
        <div className="login">
            <Image {...logoProps} />
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
