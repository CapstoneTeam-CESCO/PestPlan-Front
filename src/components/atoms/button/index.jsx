import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/* eslint-disable react/button-has-type */
function Button({ type, className, children, ...props }) {
    return (
        <button
            type={type}
            className={`button--default ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
};

export default Button;
