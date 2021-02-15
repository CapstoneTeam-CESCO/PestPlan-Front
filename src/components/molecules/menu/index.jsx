import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import Button from "../../atoms/button";

function Menu({ className, noticeProps, deviceProps }) {
    return (
        <div className={className}>
            <Button {...noticeProps} />
            <Button {...deviceProps} />
        </div>
    );
}

Menu.propTypes = {
    className: PropTypes.string,
    noticeProps: PropTypes.shape({
        type: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired,
    }),
    deviceProps: PropTypes.shape({
        type: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired,
    }),
};

export default Menu;
