import React from 'react';
import './Header.scss';
import TeamName from './../atoms/TeamName';
import UserInfo from './../molecules/UserInfo';

function Header(props) {
    return (
        <div className={props.className}>
            <TeamName className="teamName" />
            <UserInfo className="userInfo" />
        </div>
    );
}

export default Header;