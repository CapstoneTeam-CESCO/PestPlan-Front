import React, { useState, useEffect } from 'react';
import { makeStyles, Chip, IconButton, InputAdornment, OutlinedInput, FormControl } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import './BoardNav.scss';
import PageBtn from './../atoms/PageBtn';

const useStyles = makeStyles(() => ({
    button_page: {
        backgroundColor: 'beige',
        minWidth: '10px',
        height: '35px',
        marginRight: '3px'
    },
    button_page_now: {
        backgroundColor: '#d9d4cf'
    },
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

function BoardNav(props) {
    const { className, page_total, page, setPage } = props;
    const [ pageBtns, setPageBtns ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ query, setQuery ] = useState("");
    const classes = useStyles();
    const searchCategories = ['날짜', '지역', '설치 위치', '트랩 종류', '교체/에러'];

    console.log("page in BoardNav");

    const handleClick = (event) => { setPage(parseInt(event.target.innerText)); }
    const handleFirstClick = () => { setPage(1); }
    const handleLastClick = () => { setPage(page_total); }

    const handleChange = (event, newCategories) => {
        setCategories(newCategories);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        let pageBtns = [];

        for(let cur = 1; cur <= page_total; cur++) {
            pageBtns.push(
                <PageBtn
                    className={`${classes.button_page} ${(cur === page) && classes.button_page_now}`}
                    key={cur}
                    contents={cur}
                    onClick={handleClick} />
            );
        }

        setPageBtns(pageBtns);
    }, [page]);

    return (
        <div className={className}>
            <div className="pagination">
                <PageBtn
                    className={classes.button_page}
                    contents="<"
                    onClick={handleFirstClick} />
                {pageBtns}
                <PageBtn
                    className={classes.button_page}
                    contents=">"
                    onClick={handleLastClick} />
            </div>

            <form className="form-search" onSubmit={handleSubmit}>
                {props.isNotice &&
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
                }

                <FormControl variant="outlined">
                    <OutlinedInput
                        className="outlinedInput-search"
                        id="search"
                        value={query}
                        onChange={ event => setQuery(event.target.value) }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton type="submit" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        } />
                </FormControl>
            </form>
        </div>
    );
}

export default BoardNav;

// variant="outlined"