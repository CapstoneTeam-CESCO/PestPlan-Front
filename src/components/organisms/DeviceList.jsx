import React from 'react';

import './Board.scss';
import './DeviceList.scss';
import BoardHeader from '../atoms/BoardHeader';
import DeviceBoardBody from '../atoms/DeviceBoardBody';
import BoardNav from './../molecules/BoardNav';

function DeviceList(props) {
    const { className, devices } = props;

    return (
        <div className={`board ${className}`}>
            <BoardHeader
                className="bdHeader"
                header="Device List" />
            <DeviceBoardBody
                className="bdBody"
                devices={devices} />
            <BoardNav
                className="bdNav"
                isNotice={false} />
        </div>
    );
}

export default DeviceList;