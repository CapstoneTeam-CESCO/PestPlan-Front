import React from 'react';

function Input({ isLabelFirst, input: { type, inputClassName, id, onClick }, label: { labelClassName, children } }) {
    const label = (<label className={labelClassName} htmlFor={id}>{children}</label>);
    const input = (<input type={type} className={inputClassName} id={id} onClick={onClick} />);

    return (isLabelFirst ? [label, input] : [input, label]);
}

export default Input;