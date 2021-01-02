import React from 'react';

import './HomeTmpl.scss';
import Header from '../components/organisms/Header';
import Notice from '../components/organisms/Notice';
import DeviceList from '../components/organisms/DeviceList';

function HomeTmpl() {
    return (
        <div className="homeTmpl">
            <Header className="header" />
            <Notice className="notice" />
            <DeviceList className="deviceList" />
        </div>
    );
}

export default HomeTmpl;