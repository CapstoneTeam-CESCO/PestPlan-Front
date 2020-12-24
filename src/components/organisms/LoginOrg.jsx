import React from 'react';
import LoginForm from '../molecules/LoginForm';
import LoginTeamLogo from './../molecules/LoginTeamLogo';

function LoginOrg(props) {
    const { className } = props;

    return (
        <div className={className}>
            <LoginTeamLogo />
            <LoginForm />
        </div>
    );
}

export default LoginOrg;