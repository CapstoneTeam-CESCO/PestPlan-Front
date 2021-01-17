import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Button, Popover } from '@material-ui/core';

import './Search.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import FilterList from '../atoms/FilterList';

function Search() {
    const [ anchorEl, setAnchorEl ] = useState(null);
    const [ dates, setDates ] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        }
    ]);
    const [ locations, setLocations ] = useState([
        { value: '공장내부-1', selected: false },
        { value: '공장내부-2', selected: false },
        { value: '공장내부-3', selected: false },
        { value: '공장내부-4', selected: false },
        { value: '공장외부-1', selected: false },
        { value: '공장외부-2', selected: false },
        { value: '공장외부-3', selected: false },
        { value: '공장외부-4', selected: false },
        { value: '공장외부-5', selected: false },
        { value: '잔디-1', selected: false }
    ]);
    const [ models, setModels ] = useState([
        { value: 'DAM', selected: false },
        { value: 'AG DAM', selected: false },
        { value: 'FG DAM', selected: false },
        { value: 'SM', selected: false },
        { value: '환경 모니터링 SM', selected: false },
        { value: '피닉스', selected: false },
        { value: '썬더블루', selected: false },
        { value: '블루스톰(전극)', selected: false },
        { value: '블루스톰(흡입)', selected: false },
        { value: '바이퍼', selected: false },
        { value: '블루치즈', selected: false },
        { value: '쥐모니터링', selected: false },
        { value: '큐브', selected: false }
    ]);
    const [ states, setStates ] = useState([
        { value: '정상', selected: false },
        { value: '에러', selected: false },
        { value: '교체 필요', selected: false },
    ]);

    const handleClickButtonFilter = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClosePopover = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);

    return (
        <div className="search">
            <Button onClick={handleClickButtonFilter}>
                필터
            </Button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <div className="search-filter">
                    <dl className="search-filter-dl">
                        <dt>날짜</dt>
                        <dd>
                            <DateRange
                                className="search-filter-cell daterange-search-date"
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates} />
                        </dd>
                    </dl>

                    <dl className="search-filter-dl">
                        <dt>설치 위치</dt>
                        <dd>
                            <FilterList filters={locations} setFilters={setLocations} />
                        </dd>
                    </dl>

                    <dl className="search-filter-dl">
                        <dt>트랩 종류</dt>
                        <dd>
                            <FilterList filters={models} setFilters={setModels} />
                        </dd>
                    </dl>

                    <dl className="search-filter-dl last">
                        <dt>상태</dt>
                        <dd>
                            <FilterList filters={states} setFilters={setStates} />
                        </dd>
                    </dl>
                </div>
            </Popover>
        </div>
    );
}

export default Search;