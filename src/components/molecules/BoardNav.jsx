import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import './BoardNav.scss';
import InputText from './../atoms/InputText';
import PageBtn from './../atoms/PageBtn';
import SearchChk from './../atoms/SearchChk';

const useStyles = makeStyles(() => ({
    search: {
        backgroundColor: '#333030',
        borderRadius: '3px'
    }, pageBtn: {
        backgroundColor: 'beige',
        minWidth: '10px',
        height: '35px',
        marginRight: '3px'
    }, curBtn: {
        backgroundColor: '#d9d4cf'
    }
}));

function BoardNav(props) {
    const { className, page_total, page, setPage } = props;
    const [ pageBtns, setPageBtns ] = useState([]);
    const classes = useStyles();

    console.log("page in BoardNav");

    const handleClick = (event) => { setPage(parseInt(event.target.innerText)); }
    const handleFirstClick = () => { setPage(1); }
    const handleLastClick = () => { setPage(page_total); }

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
            <form>
                <InputText
                    className="searchInput"
                    id="search"
                    label="Search" />
                <Search
                    className={classes.search}
                    style={{ color: 'white', fontSize: 40 }} />

                {props.isNotice &&
                    <div className="chks">
                        <SearchChk
                            className="locationChk"
                            id="location"
                            name="location"
                            label="설치 위치" />
                        <SearchChk
                            className="deviceChk"
                            id="device"
                            name="device"
                            label="트랩 종류" />
                    </div>
                }
            </form>
        </div>
    );
}

export default BoardNav;