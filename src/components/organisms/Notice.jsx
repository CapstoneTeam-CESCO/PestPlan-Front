import React, { useState } from 'react';

import './Board.scss';
import './Notice.scss';
import BoardHeader from '../atoms/BoardHeader';
import BoardBody from '../atoms/BoardBody';
import BoardNav from '../molecules/BoardNav';
import * as Constants from '../../constants/Constants';
import { initializeFilters } from '../../utilities/FilterUtility';

function Notice({ className, notice_cnt }) {
    const [ page, setPage ] = useState(1);
    const [ filters, setFilters ] = useState(initializeFilters());
    const thead = Constants.NOTICE_THEAD;
    const page_total = Math.ceil(notice_cnt / Constants.ROW_CNT);

    console.log(filters);

    return (
        <div className={`board ${className}`}>
            <BoardHeader
                className="bdHeader"
                header="Notice" />
            <BoardBody
                className="bdBody"
                model="notices"
                page={page}
                thead={thead}
                filters={filters} />
            <BoardNav
                className="bdNav"
                isNotice={true}
                page_total={page_total}
                page={page}
                setPage={setPage}
                filters={filters}
                setFilters={setFilters} />
        </div>
    );
}

export default Notice;