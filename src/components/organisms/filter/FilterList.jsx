import React from 'react';

import './styles.scss';

function FilterList({ filters, dispatch, type }) {
    const handleClick = (event) => {
        dispatch({ type, value: event.currentTarget.id });
    };

    return (
        <ul className="filter__list">
            {filters && filters.map(filter => (
                <li key={filter.id} className="filter__list-element">
                    <a
                        href="#"
                        className={"list-element--label".concat(filter.selected ? " selected" : "")}
                        id={filter.id}
                        onClick={handleClick}
                    >
                        {filter.value}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default FilterList;