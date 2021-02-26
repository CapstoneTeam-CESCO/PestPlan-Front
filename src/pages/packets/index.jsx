import React, { useReducer, useState } from 'react';
import { DateRange } from 'react-date-range';
import { SVGMap } from 'react-svg-map';
import southKorea from '@svg-maps/south-korea';

import 'src/templates/list/styles.scss';
import FilterList from 'src/components/organisms/filter/FilterList';
import FilterGroup from 'src/components/organisms/filterGroup';
import Board from 'src/components/organisms/board';
import * as Constants from 'src/constants/Constants';
import { initializeFilters } from 'src/utilities/FilterUtility';
import {
    filtersReducer,
    notReadReducer,
    usePacketCount,
    usePacketList,
    useSelectedFilters,
} from './hooks';

function PacketsPage() {
    const initialFilters = initializeFilters();
    const [focusEndDate, setFocusEndDate] = useState(false);
    const [page, setPage] = useState(1);
    const [filters, dispatchFilters] = useReducer(
        filtersReducer,
        initialFilters
    );
    const packetCount = usePacketCount();
    const [notRead, dispatchNotRead] = useReducer(notReadReducer, {
        list: [],
    });
    const packetList = usePacketList(page, filters, dispatchNotRead);
    const selectedFilters = useSelectedFilters(filters);

    const handleLocationClassName = (_, index) => {
        return 'SVGMap-filter-region--location'.concat(
            filters.regions[index].selected ? ' selected' : ''
        );
    };

    const handleLocationClick = event => {
        dispatchFilters({
            type: 'regions',
            value: event.currentTarget.attributes.name.value,
        });
    };

    const handleChangeDateRange = item => {
        dispatchFilters({ type: 'ranges', value: [item.selection] });
        if (focusEndDate)
            dispatchFilters({ type: 'dates', value: [item.selection] });
        setFocusEndDate(!focusEndDate);
    };

    const handleClickFilterTag = event => {
        dispatchFilters({
            type: event.currentTarget.getAttribute('data-type'),
            value: event.currentTarget.getAttribute('id'),
        });
    };

    const filterGroupProps = {
        filterProps: [
            {
                key: 'packet-filter--date',
                tagProps: {
                    aProps: {
                        href: '#collapseFilterDate',
                    },
                    textProps: {
                        children: '날짜',
                    },
                },
                filterList: (
                    <DateRange
                        className="filter__list daterange-filter-date"
                        editableDateInputs={false}
                        onChange={item => handleChangeDateRange(item)}
                        moveRangeOnFirstSelection={false}
                        ranges={filters.ranges}
                    />
                ),
            },
            {
                key: 'packet-filter--region',
                tagProps: {
                    aProps: {
                        href: '#collapseFilterRegion',
                    },
                    textProps: {
                        children: '지역',
                    },
                },
                filterList: (
                    <SVGMap
                        map={southKorea}
                        className="filter__list SVGMap-filter-region"
                        locationClassName={handleLocationClassName}
                        locationRole="checkbox"
                        onLocationClick={handleLocationClick}
                    />
                ),
            },
            {
                key: 'packet-filter--location',
                tagProps: {
                    aProps: {
                        href: '#collapseFilterLocation',
                    },
                    textProps: {
                        children: '설치 위치',
                    },
                },
                filterList: (
                    <FilterList
                        filters={filters.locations}
                        dispatch={dispatchFilters}
                        type="locations"
                    />
                ),
            },
            {
                key: 'packet-filter--model',
                tagProps: {
                    aProps: {
                        href: '#collapseFilterModel',
                    },
                    textProps: {
                        children: '트랩 종류',
                    },
                },
                filterList: (
                    <FilterList
                        filters={filters.models}
                        dispatch={dispatchFilters}
                        type="models"
                    />
                ),
            },
            {
                key: 'packet-filter--type',
                tagProps: {
                    aProps: {
                        href: '#collapseFilterType',
                    },
                    textProps: {
                        children: '메시지 타입',
                    },
                },
                filterList: (
                    <FilterList
                        filters={filters.types}
                        dispatch={dispatchFilters}
                        type="types"
                    />
                ),
            },
        ],
    };

    const boardProps = {
        className: 'display--list board',
        headerProps: {
            className: 'board__header',
        },
        titleProps: {
            className: 'header__title',
            children: Constants.PACKET,
        },
        notReadChildrens: [
            {
                key: 'not-read',
                className: 'header__not-read',
                children: notRead.current,
            },
            {
                key: 'bar',
                className: 'bar',
                children: '/',
            },
            {
                key: 'total-count',
                className: 'header__total-count',
                children: notRead.total,
            },
        ],
        filterTagGroupProps: {
            className: 'board__filter-tag',
            tagValues: selectedFilters,
            tagProps: {
                className: 'filter-tag',
                aProps: {
                    href: '#closeTag',
                    onClick: handleClickFilterTag,
                },
                textProps: {
                    className: 'filter-tag--label small-size-text',
                },
                svgProps: {
                    type: 'close',
                    width: '10px',
                    height: '10px',
                    viewBox: '0 0 520 520',
                    className: 'filter-tag--svg',
                },
            },
        },
        boardProps: {
            className: 'board__list board__list--packet',
        },
        boardHeaderProps: {
            headItems: Constants.PACKET_LIST_THEAD,
        },
        type: 'packet',
        boardBodyProps: {
            packetList,
            notRead: notRead.list,
            dispatchNotRead,
        },
        apaginationProps: {
            className: 'board__pagination',
            count: Math.ceil(packetCount / Constants.ROW),
            siblingCount: 5,
            page,
            setPage,
            shape: 'rounded',
        },
    };

    return (
        <div className="display-page">
            <FilterGroup {...filterGroupProps} />
            <Board {...boardProps} />
        </div>
    );
}

export default PacketsPage;
