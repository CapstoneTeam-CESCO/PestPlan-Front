import React from "react";
import PropTypes from "prop-types";
import { Snackbar } from "@material-ui/core";

function ASnackbar({ open, setOpen, autoHideDuration, message }) {
    const handleClose = (_, reason) => {
        if (reason === "clickaway") return;

        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            message={message}
            onClose={handleClose}
        />
    );
}

ASnackbar.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    autoHideDuration: PropTypes.number,
    message: PropTypes.string,
};

export default ASnackbar;
