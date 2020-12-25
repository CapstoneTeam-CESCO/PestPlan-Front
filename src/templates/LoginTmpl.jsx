import React from 'react';
import './LoginTmpl.scss';
import LoginOrg from './../components/organisms/LoginOrg';

function LoginTmpl() {
    return (
        <div className="LoginTmpl">
            <LoginOrg className="loginOrg" />
        </div>
    );
}

export default LoginTmpl;