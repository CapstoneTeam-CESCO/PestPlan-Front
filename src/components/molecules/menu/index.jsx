import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Button from 'src/components/atoms/button';

function Menu({ className, packetProps, deviceProps }) {
    return (
        <div className={className}>
            <Button {...packetProps} />
            <Button {...deviceProps} />
        </div>
    );
}

Menu.propTypes = {
    className: PropTypes.string,
    packetProps: PropTypes.shape({
        type: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired,
    }),
    deviceProps: PropTypes.shape({
        type: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired,
    }),
};

export default Menu;
