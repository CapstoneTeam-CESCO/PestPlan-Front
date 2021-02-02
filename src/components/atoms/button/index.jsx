import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function Button({ type, children, ...props }) {
    return (
        /* eslint-disable-next-line react/button-has-type */
        <button type={type} {...props}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(["submit", "reset", "button"]),
    children: PropTypes.any.isRequired,
};

export default Button;
