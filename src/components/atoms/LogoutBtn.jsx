import React from 'react';

function LogoutBtn(props) {
    const { className, onClick } = props;

    return (
        <button className={className} onClick={onClick}>
            로그아웃
        </button>
    );
}

export default LogoutBtn;