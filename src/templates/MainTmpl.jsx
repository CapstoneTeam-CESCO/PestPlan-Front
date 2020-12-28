import React from 'react';

import './MainTmpl.scss';
import DeviceList from './../components/organisms/DeviceList';
import Header from './../components/organisms/Header'
import Notice from './../components/organisms/Notice'

function MainTmpl() {
    return (
        <div className="mainTmpl">
            <Header className="header" />
            <Notice className="notice" />
            <DeviceList className="deviceList" />
        </div>
    );
}

export default MainTmpl;