import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

function InputText(props) {
    const { className, id, label } = props;

    return (
        <TextField
            className={className}
            id={id}
            label={label}
            variant="outlined"
        />
    );
}

export default InputText;