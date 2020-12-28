import React from 'react';
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
    }
}));

const styles = {
    root: {
        backgroundColor: 'beige',
        minWidth: '10px',
        height: '35px',
        marginRight: '3px'
    }
}

function BoardNav(props) {
    const classes = useStyles();

    return (
        <div className={props.className}>
            <div className="pageBtns">
                <PageBtn className="pageBtn" contents="<" styles={styles} />
                <PageBtn className="pageBtn" contents="1" styles={styles} />
                <PageBtn className="pageBtn" contents=">" styles={styles} />
            </div>
            <form>
                <InputText className="searchInput" id="search" label="Search" />
                <Search className={classes.search} style={{ color: 'white', fontSize: 40 }}/>
                {props.isNotice &&
                    <div className="chks">
                        <SearchChk className="locationChk" id="location" name="location" label="설치 위치" />
                        <SearchChk className="deviceChk" id="device" name="device" label="트랩 종류" />
                    </div>
                }
            </form>
        </div>
    );
}

export default BoardNav;