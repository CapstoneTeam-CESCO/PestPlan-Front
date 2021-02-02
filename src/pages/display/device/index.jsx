import React, { useReducer, useState } from "react";
import { SVGMap } from "react-svg-map";
import southKorea from "@svg-maps/south-korea";

import "../../../templates/display/styles.scss";
import FilterList from "../../../components/organisms/filter/FilterList";
import FilterGroup from "../../../components/organisms/filterGroup";
import Board from "../../../components/organisms/board";
import * as Constants from "../../../constants/Constants";
import {
    filtersReducer,
    useDeviceCount,
    useDeviceList,
    useSelectedFilters,
} from "../../../hooks/DeviceHook";
import { createFilterItems } from "../../../utilities/FilterUtility";

const initialFilters = {
    regions: createFilterItems(Constants.REGIONS),
    locations: createFilterItems(Constants.LOCATIONS),
    models: createFilterItems(Constants.MODELS),
};

const handleClickDetail = () => {
    console.log("good");
};

function DisplayDevicePage() {
    const [page, setPage] = useState(1);
    const [filters, dispatchFilters] = useReducer(
        filtersReducer,
        initialFilters
    );
    const deviceCount = useDeviceCount();
    const deviceList = useDeviceList(page, filters, handleClickDetail);
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
        console.log(filters.regions);
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
        ],
    };

    const boardProps = {
        className: "display--list board",
        titleProps: {
            className: "board-title",
            children: Constants.DEVICE,
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
            theads: Constants.DEVICE_THEAD,
            tbodies: deviceList,
        },
        apaginationProps: {
            className: "notice__pagination",
            count: Math.ceil(deviceCount / Constants.ROW_CNT),
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

export default DisplayDevicePage;
