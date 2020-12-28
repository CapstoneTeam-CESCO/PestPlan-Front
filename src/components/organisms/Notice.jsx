import React from 'react';

import './Notice.scss';
import BoardBody from './../molecules/BoardBody';
import BoardNav from './../molecules/BoardNav';

function Notice(props) {
    const thead = ['알림No.', '날짜', '설치 위치', '트랩 종류', '교체/에러'];

    return (
        <div className={props.className}>
            <p className="ntcHeader">Notice</p>
            <BoardBody className="ntcBody" thead={thead}/>
            <BoardNav className="ntcNav" />
        </div>
    );
}

export default Notice;