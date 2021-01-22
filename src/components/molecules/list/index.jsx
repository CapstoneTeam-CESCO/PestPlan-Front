import React from 'react';

import './styles.scss';

function FilterList({ filters, setFilters }) {
    const handleClick = (event) => {
        setFilters(filters.map(filter => (
            filter.value === event.currentTarget.innerText
                ? { ...filter, selected: !filter.selected }
                : filter
        )));
    };

    return (
        <ul className="ul-search-filters">
            {filters && filters.map(filter => {
                let spanClass = "span-search-filter-contents";
                if(filter.selected) spanClass += " selected";

                return (
                    <li key={filter.value} className="li-search-filter">
                        <span className={spanClass} onClick={handleClick}>
                            {filter.value}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

export default FilterList;