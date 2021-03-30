import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Image({ className, src, alt, ...props }) {
    return <img className={className} {...props} src={src} alt={alt} />;
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;
