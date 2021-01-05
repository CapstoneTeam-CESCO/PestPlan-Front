import React from 'react';

import './Header.scss';
import TeamName from './../atoms/TeamName';
import UserInfo from './../molecules/UserInfo';

function Header(props) {
    const { className, username, device_cnt } = props;

    return (
        <div className={className}>
            <TeamName
                className="teamName" />
            <UserInfo
                className="userInfo"
                username={username}
                device_cnt={device_cnt} />
        </div>
    );
}

export default Header;