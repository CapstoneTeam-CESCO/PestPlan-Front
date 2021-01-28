import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

import './styles.scss';
import ArrowSVG from '../../atoms/arrowSVG';
import Text from '../../atoms/text';

function Filter({ filterProps: { filterHeader: { a, text }, filterList } }) {
    const [ isOpen, setIsOpen ] = useState(true);

    const handleClickCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="filter">
            <div className="filter__header">
                <a
                    href={a.href}
                    className={isOpen ? null : "collapsed"}
                    onClick={handleClickCollapse}
                >
                    <Text
                        className={text.className}
                        children={text.children} />
                    <ArrowSVG
                        className="arrow-svg" />
                </a>
            </div>
            <Collapse isOpened={isOpen}>
                {filterList.children}
            </Collapse>
        </div>
    );
}

export default Filter;