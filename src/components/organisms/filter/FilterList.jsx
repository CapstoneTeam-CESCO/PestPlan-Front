import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Button from 'src/components/atoms/button';

function FilterList({ filters, dispatch, type }) {
    const handleClick = event => {
        dispatch({ type, value: event.currentTarget.id });
    };

    return (
        <ul className="filter__list">
            {filters &&
                filters.map(filter => (
                    <li key={filter.id} className="filter__list-element">
                        <Button
                            type="button"
                            className={'button--default list-element--label'.concat(
                                filter.selected ? ' selected' : ''
                            )}
                            id={filter.id}
                            onClick={handleClick}
                        >
                            {filter.value}
                        </Button>
                    </li>
                ))}
        </ul>
    );
}

FilterList.propTypes = {
    filters: PropTypes.array,
    dispatch: PropTypes.func,
    type: PropTypes.string,
};

export default FilterList;
