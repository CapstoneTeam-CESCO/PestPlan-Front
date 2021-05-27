import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'src/components/atoms/button';
import Image from 'src/components/atoms/image';
import Span from 'src/components/atoms/span';

function SidebarBtn({ current, next, src, btnChildren }) {
    const history = useHistory();

    return (
        <Button
            type="button"
            className={`menu${current === next ? ' current' : ''}`}
            onClick={() => history.push(next)}
        >
            <Image className="menu__image" src={src} alt="" />
            <Span className="menu__span">{btnChildren}</Span>
        </Button>
    );
}

SidebarBtn.propTypes = {
    current: PropTypes.string,
    next: PropTypes.string,
    src: PropTypes.any,
    btnChildren: PropTypes.string,
};

export default SidebarBtn;
