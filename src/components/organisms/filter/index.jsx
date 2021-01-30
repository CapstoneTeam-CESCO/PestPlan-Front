import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

import './styles.scss';
import Tag from '../../molecules/tag';

function Filter({ filterProps: { tagProps, filterList } }) {
    const [ isOpen, setIsOpen ] = useState(true);

    const handleClickCollapse = () => {
        setIsOpen(!isOpen);
    };

    tagProps = {
        ...tagProps,
        className: "filter__header",
        aProps: {
            ...tagProps.aProps,
            className: isOpen ? null : "collapsed",
            onClick: handleClickCollapse,
        },
        svgProps: {
            type: "arrow",
            width: "12px",
            height: "12px",
            viewBox: "0 0 451.847 451.847",
            className: "arrow-svg",
        },
    }

    return (
        <div className="filter">
            <Tag
                tagProps={tagProps} />
            <Collapse isOpened={isOpen}>
                {filterList.children}
            </Collapse>
        </div>
    );
}

export default Filter;