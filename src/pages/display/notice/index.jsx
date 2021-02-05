import React, { useReducer, useState } from "react";
import { DateRange } from "react-date-range";
import { SVGMap } from "react-svg-map";
import southKorea from "@svg-maps/south-korea";

import "../../../templates/display/styles.scss";
import FilterList from "../../../components/organisms/filter/FilterList";
import FilterGroup from "../../../components/organisms/filterGroup";
import Board from "../../../components/organisms/board";
import * as Constants from "../../../constants/Constants";
import {
    filtersReducer,
    useNoticeCount,
    useNoticeList,
    useSelectedFilters,
} from "../../../hooks/NoticeHook";
import { initializeFilters } from "../../../utilities/FilterUtility";

function DisplayNoticePage() {
    const initialFilters = initializeFilters();
    const [focusEndDate, setFocusEndDate] = useState(false);
    const [page, setPage] = useState(1);
    const [filters, dispatchFilters] = useReducer(
        filtersReducer,
        initialFilters
    );
    const noticeCount = useNoticeCount();
    const noticeList = useNoticeList(page, filters);
    const selectedFilters = useSelectedFilters(filters);

    const handleLocationClassName = (_, index) => {
        return "SVGMap-filter-region--location".concat(
            filters.regions[index].selected ? " selected" : ""
        );
    };

    const handleLocationClick = event => {
        dispatchFilters({
            type: "regions",
            value: event.currentTarget.attributes.name.value,
        });
    };

    const handleChangeDateRange = item => {
        dispatchFilters({ type: "ranges", value: [item.selection] });
        if (focusEndDate)
            dispatchFilters({ type: "dates", value: [item.selection] });
        setFocusEndDate(!focusEndDate);
    };

    const handleClickFilterTag = event => {
        dispatchFilters({
            type: event.currentTarget.getAttribute("data-type"),
            value: event.currentTarget.getAttribute("id"),
        });
    };

    const filterGroupProps = {
        filterProps: [
            {
                key: "notice-filter--date",
                tagProps: {
                    aProps: {
                        href: "#collapseFilterDate",
                    },
                    textProps: {
                        children: "날짜",
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
                key: "notice-filter--region",
                tagProps: {
                    aProps: {
                        href: "#collapseFilterRegion",
                    },
                    textProps: {
                        children: "지역",
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
                key: "notice-filter--location",
                tagProps: {
                    aProps: {
                        href: "#collapseFilterLocation",
                    },
                    textProps: {
                        children: "설치 위치",
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
                key: "notice-filter--model",
                tagProps: {
                    aProps: {
                        href: "#collapseFilterModel",
                    },
                    textProps: {
                        children: "트랩 종류",
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
                key: "notice-filter--type",
                tagProps: {
                    aProps: {
                        href: "#collapseFilterType",
                    },
                    textProps: {
                        children: "메시지 타입",
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
        className: "display--list board",
        titleProps: {
            children: Constants.NOTICE,
            className: "board-title",
        },
        filterTagGroupProps: {
            className: "notice__filter-tag",
            tagValues: selectedFilters,
            tagProps: {
                className: "filter-tag",
                aProps: {
                    href: "#closeTag",
                    onClick: handleClickFilterTag,
                },
                textProps: {
                    className: "filter-tag--label small-size-text",
                },
                svgProps: {
                    type: "close",
                    width: "10px",
                    height: "10px",
                    viewBox: "0 0 520 520",
                    className: "filter-tag--svg",
                },
            },
        },
        boardBodyProps: {
            className: "board-body notice__board-body",
            heads: Constants.NOTICE_THEAD,
            bodies: noticeList,
            hasDetail: true,
        },
        apaginationProps: {
            className: "notice__pagination",
            count: Math.ceil(noticeCount / Constants.ROW_CNT),
            siblingCount: 5,
            page,
            setPage,
            shape: "rounded",
        },
    };

    return (
        <div className="display-page">
            <FilterGroup {...filterGroupProps} />
            <Board {...boardProps} />
        </div>
    );
}

export default DisplayNoticePage;
