import React, { useState } from 'react';
import { Popover } from '@material-ui/core';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import APagination from '../../atoms/pagination';
import Button from '../../atoms/button';
import NoticeFilter from '../../organisms/noticeFilter';

function BoardNav({ className, apagination, button, noticeFilter }) {
    const [ anchorEl, setAnchorEl ] = useState(null);

    const handleClickButtonFilter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    if(!noticeFilter.filters) return null;

    return (
        <div className={className}>
            <APagination
                count={apagination.count}
                siblingCount={apagination.siblingCount}
                page={apagination.page}
                setPage={apagination.setPage}
                shape={apagination.shape} />

            <Button
                className={button.className}
                onClick={handleClickButtonFilter}
                children={button.children} />

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
                <NoticeFilter
                    filters={noticeFilter.filters}
                    setFilters={noticeFilter.setFilters}
                    setAnchorEl={setAnchorEl} />
            </Popover>
        </div>
    );
}

export default BoardNav;