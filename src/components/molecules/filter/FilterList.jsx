import React from 'react';

import './styles.scss';
import Input from '../../atoms/input';

function FilterList({ filters, dispatch, type }) {
    const handleClick = (event) => {
        dispatch({ type, value: event.currentTarget.id });
    };

    return (
        <ul className="filter__list">
            {filters && filters.map(filter => (
                <li key={filter.id} className="filter__list-element">
                    <Input
                        isLabelFirst={false}
                        input={{
                            type: "checkbox",
                            inputClassName: "list-element--input",
                            id: filter.id,
                            onClick: handleClick,
                        }}
                        label={{
                            labelClassName: "list-element--label".concat(filter.selected ? " selected" : ""),
                            children: filter.value
                        }} />
                </li>
            ))}
        </ul>
    );
}

export default FilterList;