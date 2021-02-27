import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import Button from 'src/components/atoms/button';
import Image from 'src/components/atoms/image';
import Text from 'src/components/atoms/text';
import * as Constants from 'src/constants/Constants';
import ProfileImg from 'src/images/profile.png';
import useUserName from './hooks';

function Header() {
    const history = useHistory();
    const username = useUserName();

    const titleProps = {
        type: 'button',
        children: Constants.TEAM_NAME_CAPITAL,
        className: 'button--default header__team-name',
        onClick: () => history.push(Constants.HOME_PATH),
    };

    const imageProps = {
        src: ProfileImg,
        alt: 'profile',
        className: 'header__profile-image',
    };
    const textProps = {
        children: username,
        className: 'header__user-name',
    };

    return (
        <div className="App-header">
            <Button {...titleProps} />
            <div className="header__user">
                <Image {...imageProps} />
                <Text {...textProps} />
            </div>
        </div>
    );
}

export default Header;
