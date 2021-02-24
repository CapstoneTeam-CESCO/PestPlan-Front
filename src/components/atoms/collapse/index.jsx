import React from 'react';
import PropTypes from 'prop-types';

function Collapse({ className, children, isOpen, ...props }) {
    const name = className.concat(isOpen ? ' open' : ' closed');

    return (
        <div className={name} {...props}>
            {children}
        </div>
    );
}

Collapse.propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
};

export default Collapse;
