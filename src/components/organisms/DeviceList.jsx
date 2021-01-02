import React from 'react';

import './Board.scss';
import './DeviceList.scss';
import BoardHeader from '../atoms/BoardHeader';
import BoardBody from '../atoms/BoardBody';
import BoardNav from './../molecules/BoardNav';

function DeviceList(props) {
    const thead = ['No.', '지역', '설치 위치', '트랩 종류', '상세 정보'];

    return (
        <div className={`board ${props.className}`}>
            <BoardHeader className="bdHeader" header="Device List" />
            <BoardBody className="bdBody" thead={thead} />
            <BoardNav className="bdNav" isNotice={false} />
        </div>
    );
}

export default DeviceList;