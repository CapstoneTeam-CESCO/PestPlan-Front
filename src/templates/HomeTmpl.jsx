import React from 'react';

import './HomeTmpl.scss';
import Header from '../components/organisms/Header';
import Notice from '../components/organisms/Notice';
import DeviceList from '../components/organisms/DeviceList';

function HomeTmpl(props) {
    const { info: { userInfo, devices, notices }} = props;

    return (
        <div className="homeTmpl">
            <Header className="header" userInfo={userInfo} />
            <Notice className="notice" notices={notices} />
            <DeviceList className="deviceList" devices={devices} />
        </div>
    );
}

export default HomeTmpl;