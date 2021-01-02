import React from 'react';
import { TextField } from '@material-ui/core';

function InputText(props) {
    const { className, id, label, name, inputRef } = props;

    return (
        <TextField
            className={className}
            id={id}
            label={label}
            name={name}
            inputRef={inputRef}
            variant="outlined" />
    );
}

export default InputText;