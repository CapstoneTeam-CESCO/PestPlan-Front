import React from 'react';

import './styles.scss';

function Text({ className, onClick, children }) {
    return (
        <p className={className} onClick={onClick}>
            {children}
        </p>
    );
}

export default Text;