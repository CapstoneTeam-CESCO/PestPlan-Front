import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import InputText from 'src/components/atoms/inputText';
import Button from 'src/components/atoms/button';

function LoginForm({
    className,
    firstInputTextProps,
    secondInputTextProps,
    buttonProps,
}) {
    return (
        <div className={className}>
            <InputText {...firstInputTextProps} />
            <InputText {...secondInputTextProps} />
            <Button {...buttonProps} />
        </div>
    );
}

LoginForm.propTypes = {
    className: PropTypes.string,
    firstInputTextProps: PropTypes.object,
    secondInputTextProps: PropTypes.object,
    buttonProps: PropTypes.shape({
        type: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired,
    }),
};

export default LoginForm;
