import React from 'react';

import './styles.scss';
import InputText from '../../atoms/inputText';
import Button from '../../atoms/button';

function LoginForm({ loginFormProps: { className, firstInputText, secondInputText, button } }) {
    return (
        <div className={className}>
            <InputText
                className={firstInputText.className}
                label={firstInputText.label}
                name={firstInputText.name}
                inputRef={firstInputText.inputRef}
                variant={firstInputText.variant} />
            <InputText
                className={secondInputText.className}
                label={secondInputText.label}
                name={secondInputText.name}
                inputRef={secondInputText.inputRef}
                variant={secondInputText.variant} />
            <Button
                className={button.className}
                onClick={button.onClick}
                children={button.children} />
        </div>
    );
}

export default LoginForm;