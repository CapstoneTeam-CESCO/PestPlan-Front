import React from 'react';

import './Board.scss';
import './Notice.scss';
import BoardHeader from '../atoms/BoardHeader';
import BoardBody from '../atoms/BoardBody';
import BoardNav from './../molecules/BoardNav';

function Notice(props) {
    const thead = ['알림No.', '날짜', '설치 위치', '트랩 종류', '교체/에러'];

    return (
        <div className={`board ${props.className}`}>
            <BoardHeader className="bdHeader" header="Notice" />
            <BoardBody className="bdBody" thead={thead}/>
            <BoardNav className="bdNav" isNotice={true} />
        </div>
    );
}

export default Notice;