import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';

import './styles.scss';
import Tag from 'src/components/molecules/tag';

function Filter({ tagProps, filterList }) {
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
        <div className="filter">
            <Tag {...reTagProps} />
            <Collapse isOpened={isOpen}>{filterList}</Collapse>
        </div>
    );
}

Filter.propTypes = {
    tagProps: PropTypes.object,
    filterList: PropTypes.node,
};

export default Filter;
