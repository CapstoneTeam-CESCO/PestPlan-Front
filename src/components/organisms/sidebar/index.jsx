import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import Button from 'src/components/atoms/button';
import * as Constants from 'src/constants/Constants';

function Sidebar({ currentPath }) {
    const history = useHistory();

    const buttonClassNameByPath = path =>
        'button--default menu__button--nav'.concat(
            currentPath === path ? ' menu__button--current' : ''
        );

    const packetProps = {
        type: 'button',
        children: Constants.PACKET_CAPITAL,
        className: buttonClassNameByPath(Constants.PACKETS_PATH),
        onClick: () => history.push(Constants.PACKETS_PATH),
    };

    const deviceProps = {
        type: 'button',
        children: Constants.DEVICE_CAPITAL,
        className: buttonClassNameByPath(Constants.DEVICES_PATH),
        onClick: () => history.push(Constants.DEVICES_PATH),
    };

    return (
        <div className="App-main__sidebar">
            <div className="sidebar__menu">
                <Button {...packetProps} />
                <Button {...deviceProps} />
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    currentPath: PropTypes.string,
};

export default Sidebar;
