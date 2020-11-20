import React from 'react';
import LoginInput from './../molecules/LoginInput';
import LoginTeamLogo from './../molecules/LoginTeamLogo';

function LoginOrg() {
    return (
        <div>
            <LoginTeamLogo />
            <LoginInput />
        </div>
    );
}

export default LoginOrg;