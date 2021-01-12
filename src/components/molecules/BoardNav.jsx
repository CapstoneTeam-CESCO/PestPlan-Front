import React, { useState, useEffect } from 'react';
import { makeStyles, IconButton, InputAdornment, OutlinedInput, FormControl } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './BoardNav.scss';
import PageBtn from './../atoms/PageBtn';
import Search from './Search';

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
}));

function BoardNav(props) {
    const { className, page_total, page, setPage } = props;
    const [ pageBtns, setPageBtns ] = useState([]);
    const [ query, setQuery ] = useState("");
    const classes = useStyles();

    console.log("page in BoardNav");

    const handleClick = (event) => { setPage(parseInt(event.target.innerText)); }
    const handleFirstClick = () => { setPage(1); }
    const handleLastClick = () => { setPage(page_total); }

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
                {props.isNotice && <Search /> }

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