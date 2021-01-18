import React, { useState } from 'react';

import './Board.scss';
import './DeviceList.scss';
import BoardHeader from '../atoms/BoardHeader';
import BoardBody from '../atoms/BoardBody';
import BoardNav from '../molecules/BoardNav';
import * as Constants from '../../constants/Constants';
import { initializeFilters } from '../../utilities/FilterUtility';

function DeviceList(props) {
    const { className, device_cnt } = props;
    const [ page, setPage ] = useState(1);
    const [ filters, setFilters ] = useState(initializeFilters());
    const thead = Constants.DEVICE_THEAD;
    const page_total = Math.ceil(device_cnt / Constants.ROW_CNT);

    return (
        <div className={`board ${className}`}>
            <BoardHeader
                className="bdHeader"
                header="Device List" />
            <BoardBody
                className="bdBody"
                model="devices"
                page={page}
                thead={thead}
                filters={filters} />
            <BoardNav
                className="bdNav"
                isNotice={false}
                page_total={page_total}
                page={page}
                setPage={setPage} />
        </div>
    );
}

export default DeviceList;