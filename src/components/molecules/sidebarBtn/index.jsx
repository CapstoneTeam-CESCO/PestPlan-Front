import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'src/components/atoms/button';
import Image from 'src/components/atoms/image';

function SidebarBtn({ current, next, src, btnChildren }) {
    const history = useHistory();

    return (
        <div className={`menu${current === next ? ' current' : ''}`}>
            <Image className="menu__image" src={src} alt="" />
            <Button
                type="button"
                className="menu__button"
                onClick={() => history.push(next)}
            >
                {btnChildren}
            </Button>
        </div>
    );
}

SidebarBtn.propTypes = {
    current: PropTypes.string,
    next: PropTypes.string,
    src: PropTypes.any,
    btnChildren: PropTypes.string,
};

export default SidebarBtn;
