import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Text({ children, ...props }) {
    return <p {...props}>{children}</p>;
}

Text.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Text;
