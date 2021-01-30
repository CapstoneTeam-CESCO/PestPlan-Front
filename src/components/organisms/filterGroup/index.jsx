import React from 'react';

import './styles.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Filter from '../filter';

function FilterGroup({ filterGroupProps: { filterProps }}) {
    return (
        <div className="display--filter">
            {filterProps.map(props => <Filter filterProps={props} />)}

            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
}

export default FilterGroup;