import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function Title({ children, ...props }) {
    return <h1 {...props}>{children}</h1>;
}

Title.propTypes = {
    titleProps: PropTypes.object,
    children: PropTypes.string.isRequired,
};

export default Title;
