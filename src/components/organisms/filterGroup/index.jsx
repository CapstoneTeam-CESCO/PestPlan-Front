import React from 'react';
import PropTypes from 'prop-types';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Filter from '../filter';

function FilterGroup({ className, leftFilterProps, rightFilterProps }) {
    return (
        <div className={`${className} display--filter`}>
            <div className="filter-col-1">
                {leftFilterProps.map(props => (
                    <Filter {...props} />
                ))}
            </div>
            <div className="filter-col-2">
                {rightFilterProps.map(props => (
                    <Filter {...props} />
                ))}
            </div>

            {/* <div>
                {'Icons made by '}
                <a href="https://www.freepik.com" title="Freepik">
                    Freepik
                </a>
                {' from '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div> */}
        </div>
    );
}

FilterGroup.propTypes = {
    className: PropTypes.string,
    leftFilterProps: PropTypes.array,
    rightFilterProps: PropTypes.array,
};

export default FilterGroup;
