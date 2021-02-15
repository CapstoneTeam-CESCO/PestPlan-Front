import React from "react";
import PropTypes from "prop-types";

function ListItem({ button, children, ...props }) {
    return (
        <li {...(button ? { role: "button" } : {})} {...props}>
            {children}
        </li>
    );
}

ListItem.defaultProps = {
    button: false,
};

ListItem.propTypes = {
    button: PropTypes.bool,
    children: PropTypes.any,
};

export default ListItem;
