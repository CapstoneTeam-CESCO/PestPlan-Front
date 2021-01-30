import React from 'react';
import { Snackbar } from '@material-ui/core';

function ASnackbar({ open, setOpen, autoHideDuration, message }) {
    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;

        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            message={message}
            onClose={handleClose} />
    );
}

export default ASnackbar;