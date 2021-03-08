import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';

import './styles.scss';
import * as Constants from 'src/constants/Constants';

function APagination({ className, count, siblingCount, page, setPage, shape }) {
    const handleChange = (_, value) => {
        setPage(value);
    };

    return (
        <Pagination
            className={className}
            count={Math.ceil(count / Constants.ROW)}
            siblingCount={siblingCount}
            page={page}
            onChange={handleChange}
            shape={shape}
        />
    );
}

APagination.defaultProps = {
    siblingCount: 5,
    shape: 'rounded',
};

APagination.propTypes = {
    className: PropTypes.string,
    count: PropTypes.number,
    siblingCount: PropTypes.number,
    page: PropTypes.number,
    setPage: PropTypes.func,
    shape: PropTypes.string,
};

export default APagination;
