import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Collapse from 'src/components/atoms/collapse';
import Tag from 'src/components/molecules/tag';

function Filter({ className, tagProps, filterList }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClickCollapse = () => {
        setIsOpen(!isOpen);
    };

    const reTagProps = {
        ...tagProps,
        className: 'filter__header',
        aProps: {
            ...tagProps.aProps,
            className: isOpen ? null : 'collapsed',
            onClick: handleClickCollapse,
        },
        svgProps: {
            type: 'arrow',
            width: '12px',
            height: '12px',
            viewBox: '0 0 451.847 451.847',
            className: 'arrow-svg',
        },
    };

    return (
        <div className={`filter ${className}`}>
            <Tag {...reTagProps} />
            <Collapse className="filter-card__collapse" isOpen={isOpen}>
                {filterList}
            </Collapse>
        </div>
    );
}

Filter.propTypes = {
    className: PropTypes.string,
    tagProps: PropTypes.object,
    filterList: PropTypes.node,
};

export default Filter;
