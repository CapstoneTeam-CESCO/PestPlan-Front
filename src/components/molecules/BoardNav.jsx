import React, { useState, useEffect } from 'react';
import { Chip, makeStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import './BoardNav.scss';
import InputText from './../atoms/InputText';
import PageBtn from './../atoms/PageBtn';

const useStyles = makeStyles(() => ({
    search: {
        backgroundColor: '#333030',
        borderRadius: '3px'
    },
    pageBtn: {
        backgroundColor: 'beige',
        minWidth: '10px',
        height: '35px',
        marginRight: '3px'
    },
    curBtn: {
        backgroundColor: '#d9d4cf'
    },
    toggle_buttons: {
        display: 'flex',
        marginBottom: '4px',
        position: 'relative',
        right: '-20px'
    },
    toggle_button: {
        height: '22px',
        border: 'none',
        padding: 0,
        margin: '1px 3px'
    },
    toggle_chip: {
        fontSize: '11px',
        height: '22px',
        cursor: 'pointer'
    }
}));

function BoardNav(props) {
    const { className, page_total, page, setPage } = props;
    const [ pageBtns, setPageBtns ] = useState([]);
    const [ values, setValues ] = useState([]);
    const classes = useStyles();
    const categories = ['날짜', '지역', '설치 위치', '트랩 종류', '교체/에러'];

    console.log("page in BoardNav");

    const handleClick = (event) => { setPage(parseInt(event.target.innerText)); }
    const handleFirstClick = () => { setPage(1); }
    const handleLastClick = () => { setPage(page_total); }

    const handleChange = (event, newValues) => {
        setValues(newValues);
    }

    useEffect(() => {
        let pageBtns = [];

        for(let cur = 1; cur <= page_total; cur++) {
            pageBtns.push(
                <PageBtn
                    className={`${classes.pageBtn} ${(cur === page) && classes.curBtn}`}
                    key={cur}
                    contents={cur}
                    onClick={handleClick} />
            );
        }

        setPageBtns(pageBtns);
    }, [page]);

    return (
        <div className={className}>
            <div className="pageBtns">
                <PageBtn
                    className={classes.pageBtn}
                    contents="<"
                    onClick={handleFirstClick} />
                {pageBtns}
                <PageBtn
                    className={classes.pageBtn}
                    contents=">"
                    onClick={handleLastClick} />
            </div>
            <form className="search-form">
                {props.isNotice &&
                    <ToggleButtonGroup
                        value={values}
                        onChange={handleChange}
                        aria-label="search categories"
                        className={classes.toggle_buttons}
                    >
                        {categories.map(category => (
                            <ToggleButton
                                key={category}
                                value={category}
                                aria-label={category}
                                className={classes.toggle_button}
                                disableRipple={true}
                            >
                                <Chip label={category} className={classes.toggle_chip} />
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                }
                <div>
                    <InputText
                        className="searchInput"
                        id="search"
                        label="Search" />
                    <Search
                        className={classes.search}
                        style={{ color: 'white', fontSize: 40 }} />
                </div>
            </form>
        </div>
    );
}

export default BoardNav;