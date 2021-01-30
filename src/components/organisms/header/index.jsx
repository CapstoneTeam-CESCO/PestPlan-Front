import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import Title from '../../atoms/title';
import Menu from '../../molecules/menu';
import ImageText from '../../molecules/imageText';
import * as Constants from '../../../constants/Constants';
import { useUsername } from '../../../hooks/HeaderHook';
import ProfileImg from '../../../images/profile.png';

function Header() {
    const history = useHistory();
    const username = useUsername();

    const handleClick = (link) => {
        history.push(link);
    }

    const headerProps = {
        className: "header",
        titleProps: {
            className: "header__team-name clickable-title",
            onClick: () => handleClick('/home'),
            children: Constants.TEAM_NAME,
        },
        menuProps: {
            className: "header__menu",
            notice: {
                className: "menu__notice clickable-text",
                onClick: () => handleClick("/display/notice"),
                children: Constants.NOTICE,
            },
            device: {
                className: "menu__device clickable-text",
                onClick: () => handleClick("/display/device"),
                children: Constants.DEVICE,
            },
        },
        userProps: {
            className: "header__user",
            image: {
                className: "header__profile-image",
                src: ProfileImg,
                alt: "profile"
            },
            text: {
                className: "header__user-name",
                children: username,
            }
        },
    };
    const { className, titleProps, menuProps, userProps } = headerProps;
    
    return (
        <div className={className}>
            <Title
                className={titleProps.className}
                onClick={titleProps.onClick}
                children={titleProps.children} />
            <Menu
                menuProps={menuProps} />
            <ImageText
                className={userProps.className}
                image={userProps.image}
                text={userProps.text} />
        </div>
    );
}

export default Header;