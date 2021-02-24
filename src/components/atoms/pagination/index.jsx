import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';

function APagination({ className, count, siblingCount, page, setPage, shape }) {
    const handleChage = (_, value) => {
        setPage(value);
    };

    return (
        <Pagination
            className={className}
            count={count}
            siblingCount={siblingCount}
            page={page}
            onChange={handleChage}
            shape={shape}
        />
    );
}

APagination.propTypes = {
    className: PropTypes.string,
    count: PropTypes.number,
    siblingCount: PropTypes.number,
    page: PropTypes.number,
    setPage: PropTypes.func,
    shape: PropTypes.string,
};

export default APagination;
