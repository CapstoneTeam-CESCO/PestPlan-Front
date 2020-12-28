import React from 'react';

import './Board.scss';
import './DeviceList.scss';
import BoardBody from './../molecules/BoardBody';
import BoardNav from './../molecules/BoardNav';

function DeviceList(props) {
    const thead = ['No.', '지역', '설치 위치', '트랩 종류', '상세 정보'];

    return (
        <div className={`board ${props.className}`}>
            <p className="bdHeader">Device List</p>
            <BoardBody className="bdBody" thead={thead} />
            <BoardNav className="bdNav" isNotice={false} />
        </div>
    );
}

export default DeviceList;