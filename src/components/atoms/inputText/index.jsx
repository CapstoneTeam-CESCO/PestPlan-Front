import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

function InputText({ className, label, name, inputRef, variant }) {
    return (
        <TextField
            className={className}
            label={label}
            name={name}
            inputRef={inputRef}
            variant={variant}
        />
    );
}

InputText.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    inputRef: PropTypes.any,
    variant: PropTypes.string,
};

export default InputText;
