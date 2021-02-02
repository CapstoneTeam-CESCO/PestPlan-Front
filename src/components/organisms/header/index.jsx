import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import Button from "../../atoms/button";
import Menu from "../../molecules/menu";
import ImageText from "../../molecules/imageText";
import * as Constants from "../../../constants/Constants";
import useUserName from "../../../hooks/HeaderHook";
import ProfileImg from "../../../images/profile.png";

function Header() {
    const history = useHistory();
    const username = useUserName();

    const handleClick = link => {
        history.push(link);
    };

    const titleProps = {
        type: "button",
        children: Constants.TEAM_NAME,
        className: "button--root header__team-name",
        onClick: () => handleClick("/home"),
    };

    const menuProps = {
        className: "header__menu",
        noticeProps: {
            type: "button",
            children: Constants.NOTICE,
            className: "button--root menu__notice",
            onClick: () => handleClick("/display/notice"),
        },
        deviceProps: {
            type: "button",
            children: Constants.DEVICE,
            className: "button--root menu__device",
            onClick: () => handleClick("/display/device"),
        },
    };

    const userProps = {
        className: "header__user",
        imageProps: {
            src: ProfileImg,
            alt: "profile",
            className: "header__profile-image",
        },
        textProps: {
            children: username,
            className: "header__user-name",
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
