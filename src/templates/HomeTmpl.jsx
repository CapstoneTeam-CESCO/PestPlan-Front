import React from 'react';

import './HomeTmpl.scss';
import Header from '../components/organisms/Header';
import Notice from '../components/organisms/Notice';
import DeviceList from '../components/organisms/DeviceList';

function HomeTmpl(props) {
    const { info: { username, device_cnt, notice_cnt }} = props;

    return (
        <div className="homeTmpl">
            <Header
                className="header"
                username={username}
                device_cnt={device_cnt} />
            <Notice
                className="notice"
                notice_cnt={notice_cnt} />
            <DeviceList
                className="deviceList"
                device_cnt={device_cnt} />
        </div>
    );
}

export default HomeTmpl;