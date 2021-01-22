import React from 'react';

import './styles.scss';

function Text({ className, children }) {
    return (
        <p className={className}>
            {children}
        </p>
    );
}

export default Text;