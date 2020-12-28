import React from 'react';

import './LoginOrg.scss';
import TeamName from './../atoms/TeamName';
import LoginForm from './../molecules/LoginForm';

function LoginOrg(props) {
    return (
        <div className={props.className}>
            <TeamName className="loginTeamName" />
            <LoginForm />
        </div>
    );
}

export default LoginOrg;