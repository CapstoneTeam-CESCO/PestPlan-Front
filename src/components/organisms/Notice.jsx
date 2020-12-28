import React from 'react';

import './Board.scss';
import './Notice.scss';
import BoardBody from './../molecules/BoardBody';
import BoardNav from './../molecules/BoardNav';

function Notice(props) {
    const thead = ['알림No.', '날짜', '설치 위치', '트랩 종류', '교체/에러'];

    return (
        <div className={`board ${props.className}`}>
            <p className="bdHeader">Notice</p>
            <BoardBody className="bdBody" thead={thead}/>
            <BoardNav className="bdNav" isNotice={true} />
        </div>
    );
}

export default Notice;