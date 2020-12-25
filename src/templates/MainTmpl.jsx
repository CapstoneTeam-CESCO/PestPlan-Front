import React from 'react';
import './MainTmpl.scss';
import Header from './../components/organisms/Header'
import Notice from './../components/organisms/Notice'
import DeviceList from './../components/organisms/DeviceList';

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