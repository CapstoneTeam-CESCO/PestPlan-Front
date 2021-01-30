import React from 'react';
import { Pagination } from '@material-ui/lab';

function APagination({ className, count, siblingCount, page, setPage, shape }) {
    const handleChage = (event, value) => {
        setPage(value);
    }

    return (
        <Pagination
            className={className}
            count={count}
            siblingCount={siblingCount}
            page={page}
            onChange={handleChage}
            shape={shape} />
    );
}

export default APagination;