import React from 'react';

function BoardHeader(props) {
    const { className, header } = props;

    return (
        <p className={className}>
            {header}
        </p>
    );
}

export default BoardHeader;