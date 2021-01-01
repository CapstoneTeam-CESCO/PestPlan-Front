import React from 'react';
import { Snackbar } from '@material-ui/core';

function FailureSnackbar(props) {
    const { open, setOpen } = props;

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;

        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            message="Invalid username or password" />
    );
}

export default FailureSnackbar;