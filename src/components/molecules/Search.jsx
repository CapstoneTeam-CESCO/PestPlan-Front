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
    const [ dateState, setDateState ] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        }
    ]);
    const classes = useStyles();
    const searchCategories = ['날짜', '지역', '설치 위치', '트랩 종류', '교체/에러'];


    const handleClickButtonDate = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClosePopoverDate = (event) => {
        console.log(dateState);
        
        setAnchorEl(null);
    }

    const handleChange = (event, newCategories) => {
        setCategories(newCategories);
    }

    const openDate = Boolean(anchorEl);

    return (
        <div>
            <Button onClick={handleClickButtonDate}>
                날짜
            </Button>
            <Popover
                open={openDate}
                anchorEl={anchorEl}
                onClose={handleClosePopoverDate}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setDateState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dateState} />
            </Popover>

            <ToggleButtonGroup
                value={categories}
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
                        <Chip label={category} className={classes.chip_toggle} />
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>    
        </div>
    );
}

export default Search;