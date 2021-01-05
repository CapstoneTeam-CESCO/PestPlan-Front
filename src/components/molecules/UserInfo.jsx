import React from 'react';
import { useHistory } from 'react-router-dom';

import './UserInfo.scss';
import imgA from './../../profile.png';
import LogoutBtn from './../atoms/LogoutBtn';
import WelcomeMsg from './../atoms/WelcomMsg';

function UserInfo(props) {
    let history = useHistory();
    const { className, username, device_cnt } = props;

    const handleClick = () => {
        window.sessionStorage.removeItem('access_token');
        history.push('/login')
    };

    return (
        <div className={className}>
            <img className="profileImg" src={imgA} alt="profile"/>
            <WelcomeMsg
                className="welcomeMsg"
                user={username}
                device={device_cnt} />
            <LogoutBtn
                className="logoutBtn"
                onClick={handleClick} />
        </div>
    );
}

export default UserInfo;