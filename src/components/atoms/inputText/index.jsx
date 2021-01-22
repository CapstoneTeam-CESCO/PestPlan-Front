import React from 'react';
import { TextField } from '@material-ui/core';

function InputText({ className, label, name, inputRef, variant }) {
    return (
        <TextField
            className={className}
            label={label}
            name={name}
            inputRef={inputRef}
            variant={variant} />
    );
}

export default InputText;