import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import Button from 'src/components/atoms/button';
import * as Constants from 'src/constants/Constants';
import Image from 'src/components/atoms/image';
import LogoImage from 'src/images/logo--white.png';
import PacketImage from 'src/images/packet.png';
import DeviceImage from 'src/images/device.png';

function Sidebar({ currentPath }) {
    const history = useHistory();

    const menuClassNameByPath = path =>
        'menu__packet'.concat(
            ` ${path.slice(1, -1)}`,
            currentPath === path ? ' menu__button--current' : ''
        );

    const imageProps = {
        teamname: {
            className: 'sidebar__team-name',
            src: LogoImage,
            alt: 'pest plan',
        },
        packet: {
            className: 'image--packet',
            src: PacketImage,
            alt: '',
        },
        device: {
            className: 'image--device',
            src: DeviceImage,
            alt: '',
        },
    };

    const packetProps = {
        type: 'button',
        children: Constants.PACKET,
        className: 'button--default menu__button--nav',
        onClick: () => history.push(Constants.PACKETS_PATH),
    };

    const deviceProps = {
        type: 'button',
        children: Constants.DEVICE,
        className: 'button--default menu__button--nav',
        onClick: () => history.push(Constants.DEVICES_PATH),
    };

    return (
        <div className="App-main__sidebar">
            <Image {...imageProps.teamname} />

            <div className="sidebar__menu">
                <div className={menuClassNameByPath(Constants.PACKETS_PATH)}>
                    <Image {...imageProps.packet} />
                    <Button {...packetProps} />
                </div>

                <div className={menuClassNameByPath(Constants.DEVICES_PATH)}>
                    <Image {...imageProps.device} />
                    <Button {...deviceProps} />
                </div>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    currentPath: PropTypes.string,
};

export default Sidebar;
