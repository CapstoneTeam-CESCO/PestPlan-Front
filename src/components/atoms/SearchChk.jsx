import React from 'react';

function SearchChk(props) {
    const { className, id, name, label } = props;

    return (
        <div className={className}>
            <input type="checkbox" id={id} name={name}/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default SearchChk;