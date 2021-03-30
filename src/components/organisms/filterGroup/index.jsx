import React from 'react';
import PropTypes from 'prop-types';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Filter from '../filter';

function FilterGroup({ className, filterProps }) {
    return (
        <div className={`${className} card filter-card`}>
            {filterProps.map(props => (
                <Filter {...props} />
            ))}

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
    filterProps: PropTypes.array,
};

export default FilterGroup;
