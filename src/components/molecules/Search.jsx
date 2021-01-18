import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { SVGMap } from 'react-svg-map';
import southKorea from '@svg-maps/south-korea';
import { Popover } from '@material-ui/core';

import './Search.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import FilterList from '../atoms/FilterList';

function Search({ filters, setFilters }) {
    const [ anchorEl, setAnchorEl ] = useState(null);
    const [ dates, setDates ] = useState(filters.dates);
    const [ regions, setRegions ] = useState(filters.regions);
    const [ locations, setLocations ] = useState(filters.locations);
    const [ models, setModels ] = useState(filters.models);
    const [ types, setTypes ] = useState(filters.types);

    const handleLocationClassName = (location, index) => {
        return regions[index].selected
            ? "location-filter-region selected"
            : "location-filter-region";
    };

    const handleLocationClick =(event) => {
        const selectedRegion = event.currentTarget.attributes.name.value;

        const newRegions = regions.map(region => {
            return region.label === selectedRegion
                ? { ...region, selected: !region.selected }
                : region
        });
        setRegions(newRegions);
        console.log(regions);
    };

    const initializeItems = (items) => {
        return items.map(item => ({
            ...item,
            selected: false,
        }));
    };

    const handleClickButtonReset = () => {
        setDates([{
            startDate: null,
            endDate: null,
            key: 'selection',
        }]);
        setRegions([]);
        setLocations(initializeItems(locations));
        setModels(initializeItems(models));
        setTypes(initializeItems(types));
    };

    const handleClickButtonSearch = () => {
        setFilters({
            dates,
            regions,
            locations,
            models,
            types,
        });
        setAnchorEl(null);
    };

    const handleClickButtonFilter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    if(!filters) return null;

    return (
        <div className="filter">
            <button className="button-filter" onClick={handleClickButtonFilter}>
                필터
            </button>

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
                <div className="popover-filter">
                    <dl className="popover-filter-dl dl-date">
                        <dt>날짜</dt>
                        <dd>
                            <DateRange
                                className="popover-filter-cell daterange-search-date"
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates} />
                        </dd>
                    </dl>

                    <dl className="popover-filter-dl dl-region">
                        <dt>지역</dt>
                        <dd>
                            <SVGMap
                                map={southKorea}
                                className="map-filter-region"
                                locationClassName={handleLocationClassName}
                                locationRole="checkbox"
                                onLocationClick={handleLocationClick} />
                        </dd>
                    </dl>

                    <dl className="popover-filter-dl dl-location">
                        <dt>설치 위치</dt>
                        <dd>
                            <FilterList filters={locations} setFilters={setLocations} />
                        </dd>
                    </dl>

                    <dl className="popover-filter-dl dl-model">
                        <dt>트랩 종류</dt>
                        <dd>
                            <FilterList filters={models} setFilters={setModels} />
                        </dd>
                    </dl>

                    <dl className="popover-filter-dl dl-type last">
                        <dt>메시지 타입</dt>
                        <dd>
                            <FilterList filters={types} setFilters={setTypes} />
                        </dd>
                    </dl>

                    <div className="filter-buttons">
                        <button className="button-filter-action button-reset" onClick={handleClickButtonReset}>
                            초기화
                        </button>

                        <button className="button-filter-action" onClick={handleClickButtonSearch}>
                            검색
                        </button>
                    </div>
                </div>
            </Popover>
        </div>
    );
}

export default Search;