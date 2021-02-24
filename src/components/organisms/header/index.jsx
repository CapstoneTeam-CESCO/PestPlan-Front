import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import Button from 'src/components/atoms/button';
import Menu from 'src/components/molecules/menu';
import ImageText from 'src/components/molecules/imageText';
import * as Constants from 'src/constants/Constants';
import ProfileImg from 'src/images/profile.png';
import useUserName from './hooks';

function Header() {
    const history = useHistory();
    const username = useUserName();

    const titleProps = {
        type: 'button',
        children: Constants.TEAM_NAME,
        className: 'button--root header__team-name',
        onClick: () => history.push(Constants.HOME_PATH),
    };

    const menuProps = {
        className: 'header__menu',
        packetProps: {
            type: 'button',
            children: Constants.PACKET,
            className: 'button--root menu__packet',
            onClick: () => history.push(Constants.PACKETS_PATH),
        },
        deviceProps: {
            type: 'button',
            children: Constants.DEVICE,
            className: 'button--root menu__device',
            onClick: () => history.push(Constants.DEVICES_PATH),
        },
    };

    const userProps = {
        className: 'header__user',
        imageProps: {
            src: ProfileImg,
            alt: 'profile',
            className: 'header__profile-image',
        },
        textProps: {
            children: username,
            className: 'header__user-name',
        },
    };

    return (
        <div className="header">
            <Button {...titleProps} />
            <Menu {...menuProps} />
            <ImageText {...userProps} />
        </div>
    );
}

export default Header;
