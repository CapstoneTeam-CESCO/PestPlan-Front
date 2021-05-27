import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import InputText from 'src/components/atoms/inputText';
import Button from 'src/components/atoms/button';

function LoginForm({
    className,
    usernameProps,
    passwordProps,
    signInProps,
    signUpProps,
}) {
    return (
        <div className={className}>
            <InputText {...usernameProps} />
            <InputText {...passwordProps} />
            <Button {...signInProps} />
            <Button {...signUpProps} />
        </div>
    );
}

LoginForm.propTypes = {
    className: PropTypes.string,
    usernameProps: PropTypes.object,
    passwordProps: PropTypes.object,
    signInProps: PropTypes.object,
    signUpProps: PropTypes.object,
};

export default LoginForm;
