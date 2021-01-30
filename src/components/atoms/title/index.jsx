import React from 'react';

import './styles.scss';

function Title({ className, id, onClick, children }) {
    return (
        <h1 className={className} id={id} onClick={onClick}>
            {children}
        </h1>
    );
}

export default Title;