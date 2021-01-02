import React, { useCallback, useEffect, useState } from 'react';

import './UserInfo.scss';
import LogoutBtn from './../atoms/LogoutBtn';
import WelcomeMsg from './../atoms/WelcomMsg';
import imgA from './../../profile.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function UserInfo(props) {
    let history = useHistory();
    const [ userInfo, setUserInfo ] = useState({
        username: "",
        device_cnt: 0,
    });
    const { username, device_cnt } = userInfo;

    const getUserInfo = useCallback(async () => {
        const access_token = window.sessionStorage.getItem('access_token');

        if(!access_token) {
            console.log("There has no access_token. Go back to the login page.");

            history.push('/');
        }
        
        let response;
        try {
            response = await axios.get(`http://localhost:4000/main/getUserInfo?access_token=${access_token}`);

            console.log("Get username and device number from the server successfully.");

            const { data: { username, device_cnt }} = response;
            setUserInfo({ username, device_cnt });
        } catch(exception) {
            console.log('Token has an exception. Re-login please.');

            history.push('/');
        }
    }, [history]);

    useEffect(() => {
        getUserInfo();
    }, [getUserInfo]);

    return (
        <div className={props.className}>
            <img className="profileImg" src={imgA} alt="profile"/>
            <WelcomeMsg
                className="welcomeMsg"
                user={username}
                device={device_cnt} />
            <LogoutBtn
                className="logoutBtn" />
        </div>
    );
}

export default UserInfo;