import React from 'react';

import './UserInfo.scss';
import LogoutBtn from './../atoms/LogoutBtn';
import WelcomeMsg from './../atoms/WelcomMsg';
import imgA from './../../profile.png';

function UserInfo(props) {
    return (
        <div className={props.className}>
            <img className="profileImg" src={imgA} alt="profile"/>
            <WelcomeMsg
                className="welcomeMsg"
                user="박현준"
                device="13" />
            <LogoutBtn
                className="logoutBtn" />
        </div>
    );
}

export default UserInfo;