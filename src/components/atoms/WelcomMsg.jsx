import React from 'react';

function WelcomeMsg(props) {
    const { className, user, device } = props;

    return (
        <div className={className}>
            <p>{user}님, 반갑습니다!</p>
            <br/>
            <p>등록된 기기 수: {device}대</p>
        </div>
    );
}

export default WelcomeMsg;