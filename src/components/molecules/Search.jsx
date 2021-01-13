import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { makeStyles, Chip, Button, Popover } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import './Search.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const useStyles = makeStyles(() => ({
    buttonGroup_toggle: {
        display: 'flex',
        marginBottom: '4px',
        position: 'relative',
        right: '-20px'
    },
    button_toggle: {
        height: '22px',
        border: 'none',
        padding: 0,
        margin: '1px 3px'
    },
    chip_toggle: {
        fontSize: '11px',
        height: '22px',
        cursor: 'pointer'
    },
}));

function Search() {
    const [ categories, setCategories ] = useState([]);
    const [ anchorEl, setAnchorEl ] = useState(null);
    const [ show, setShow ] = useState(null);
    const [ filter, setFilter ] = useState({
        date: [
            {
                startDate: new Date(),
                endDate: null,
                key: 'selection',
            }
        ],
        location: [
            { value: '공장내부-1', selected: false },
            { value: '공장내부-2', selected: false },
            { value: '공장내부-3', selected: false },
            { value: '공장내부-4', selected: false },
            { value: '공장외부-1', selected: false },
            { value: '공장외부-2', selected: false },
            { value: '공장외부-3', selected: false },
            { value: '공장외부-4', selected: false },
            { value: '공장외부-5', selected: false },
            { value: '잔디-1', selected: false },
        ],
    });
    const classes = useStyles();
    const searchCategories = ['날짜', '지역', '설치 위치', '트랩 종류', '교체/에러'];
    
    const handleClickChip = (event) => {
        setShow(event.currentTarget.children[0].innerText);
        setAnchorEl(event.currentTarget);
    }

    const handleClickSpanLocation = (event) => {
        const newLocation = filter.location.map(loc => (
            loc.value === event.currentTarget.innerText ? {...loc, selected: !loc.selected} : loc
        ));

        setFilter({
            ...filter,
            location: newLocation,
        });
        console.log(filter);
    }

    const handleClosePopover = (event) => {
        setAnchorEl(null);
        setCategories(null);
    }

    const handleChange = (event, newCategories) => {
        setCategories(newCategories);
    }

    const open = Boolean(anchorEl);

    return (
        <div className="search">
            <ToggleButtonGroup
                value={categories}
                exclusive
                onChange={handleChange}
                aria-label="search categories"
                className={classes.buttonGroup_toggle}
            >
                {searchCategories.map(category => (
                    <ToggleButton
                        key={category}
                        value={category}
                        aria-label={category}
                        className={classes.button_toggle}
                        disableRipple={true}
                    >
                        <Chip
                            label={category}
                            className={classes.chip_toggle}
                            onClick={handleClickChip} />
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>

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
                {show === '날짜' &&
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setFilter({
                            ...filter,
                            date: [item.selection],
                        })}
                        moveRangeOnFirstSelection={false}
                        ranges={filter.date} />
                }

                {show === '설치 위치' &&
                    <ul className="ul-search-location">
                        {filter.location.map((loc) => {
                            let spanClass = "span-search-location";
                            if(loc.selected) spanClass += " selected";

                            return (
                                <li key={loc.value} className="li-search-location">
                                    <span className={spanClass} onClick={handleClickSpanLocation}>{loc.value}</span>
                                </li>
                            );
                        })}
                    </ul>
                }
            </Popover>

        </div>
    );
}

export default Search;