import React, { useState } from 'react';

import './Board.scss';
import './Notice.scss';
import BoardHeader from '../atoms/BoardHeader';
import BoardBody from '../atoms/BoardBody';
import BoardNav from './../molecules/BoardNav';
import * as Constants from './../../constants/Constants';

function Notice(props) {
    const { className, notice_cnt } = props;
    const [ page, setPage ] = useState(1);
    const thead = Constants.NOTICE_THEAD;
    const page_total = Math.ceil(notice_cnt / Constants.ROW_CNT);

    return (
        <div className={`board ${className}`}>
            <BoardHeader
                className="bdHeader"
                header="Notice" />
            <BoardBody
                className="bdBody"
                model="notices"
                page={page}
                thead={thead} />
            <BoardNav
                className="bdNav"
                isNotice={true}
                page_total={page_total}
                page={page}
                setPage={setPage} />
        </div>
    );
}

export default Notice;