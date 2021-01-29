import React, { useReducer, useState } from 'react';
import { DateRange } from 'react-date-range';
import { SVGMap } from 'react-svg-map';
import southKorea from '@svg-maps/south-korea';

import '../../../templates/display/styles.scss';
import FilterList from '../../../components/molecules/filter/FilterList';
import FilterGroup from '../../../components/organisms/filterGroup';
import Notice from '../../../components/organisms/notice';
import * as Constants from '../../../constants/Constants';
import { filtersReducer, useNoticeCount, useNoticeList } from '../../../hooks/NoticeHook';
import { initializeFilters } from '../../../utilities/FilterUtility';

function DisplayNoticePage() {
    const initialFilters = initializeFilters();
    const [ focusEndDate, setFocusEndDate ] = useState(false);
    const [ noticePage, setNoticePage ] = useState(1);
    const [ filters, dispatchFilters ] = useReducer(filtersReducer, initialFilters);
    const noticeCount = useNoticeCount();
    const noticeList = useNoticeList(noticePage, filters);

    const handleLocationClassName = (_, index) => {
        return "SVGMap-filter-region--location"
            .concat(filters.regions[index].selected ? " selected" : "");
    };

    const handleLocationClick =(event) => {
        dispatchFilters({ type: "regions", value: event.currentTarget.attributes.name.value });
        console.log(filters.regions);
    };

    const handleChangeDateRange = (item) => {
        dispatchFilters({ type: 'ranges', value: [item.selection]})
        if(focusEndDate) dispatchFilters({ type: 'dates', value: [item.selection]});
        setFocusEndDate(!focusEndDate);
    }

    const filterGroupProps = {
        filterDate: {
            filterHeader: {
                a: { href: "#collapseFilterDate" },
                text: { children: "날짜" },
            },
            filterList: {
                children: (
                    <DateRange
                        className="filter__list daterange-filter-date"
                        editableDateInputs={false}
                        onChange={item => handleChangeDateRange(item)}
                        moveRangeOnFirstSelection={false}
                        ranges={filters.ranges} />
                ),
            },
        },
        filterRegion: {
            filterHeader: {
                a: { href: "#collapseFilterRegion" },
                text: { children: "지역" },
            },
            filterList: {
                children: (
                    <SVGMap
                        map={southKorea}
                        className="filter__list SVGMap-filter-region"
                        locationClassName={handleLocationClassName}
                        locationRole="checkbox"
                        onLocationClick={handleLocationClick} />
                ),
            },
        },
        filterLocation: {
            filterHeader: {
                a: { href: "#collapseFilterLocation" },
                text: { children: "설치 위치" },
            },
            filterList: {
                children: (
                    <FilterList
                        filters={filters.locations}
                        dispatch={dispatchFilters}
                        type="locations" />
                ),
            },
        },
        filterModel: {
            filterHeader: {
                a: { href: "#collapseFilterModel" },
                text: { children: "트랩 종류" },
            },
            filterList: {
                children: (
                    <FilterList
                        filters={filters.models}
                        dispatch={dispatchFilters}
                        type="models" />
                ),
            },
        },
        filterType: {
            filterHeader: {
                a: { href: "#collapseFilterType" },
                text: { children: "메시지 타입" },
            },
            filterList: {
                children: (
                    <FilterList
                        filters={filters.types}
                        dispatch={dispatchFilters}
                        type="types" />
                ),
            },
        },
    };

    const noticeProps = {
        className: "display--list board",
        title: {
            className: "board-title",
            children: Constants.NOTICE,
        },
        boardBody: {
            className: "board-body notice__board-body",
            theads: Constants.NOTICE_THEAD,
            tbodies: noticeList,
        },
        apagination: {
            className: "notice__pagination",
            count: Math.ceil(noticeCount / Constants.ROW_CNT),
            siblingCount: 5,
            page: noticePage,
            setPage: setNoticePage,
            shape: "rounded",
        },
    };

    return (
        <div className="display-page">
            <FilterGroup
                filterGroupProps={filterGroupProps} />
            <Notice
                noticeProps={noticeProps} />
        </div>
    );
}

export default DisplayNoticePage;