import React from 'react';

import './Header.scss';
import TeamName from './../atoms/TeamName';
import UserInfo from './../molecules/UserInfo';

function Header(props) {
    const { className, userInfo } = props;

    return (
        <div className={className}>
            <TeamName
                className="teamName" />
            <UserInfo
                className="userInfo"
                userInfo={userInfo} />
        </div>
    );
}

export default Header;