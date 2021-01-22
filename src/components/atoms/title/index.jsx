import React from 'react';

import './styles.scss';

function Title({ className, id, children }) {
    return (
        <h1 className={className} id={id}>
            {children}
        </h1>
    );
}

export default Title;