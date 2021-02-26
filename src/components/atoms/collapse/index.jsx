import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Collapse({ className, children, isOpen, ...props }) {
    const classname = className.concat(isOpen ? ' open' : ' closed');

    return (
        <div className={classname} {...props}>
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
