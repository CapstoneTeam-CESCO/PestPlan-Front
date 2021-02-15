import React from "react";
import PropTypes from "prop-types";

function Span({ children, ...props }) {
    return <span {...props}>{children}</span>;
}

Span.propTypes = {
    children: PropTypes.any,
};

export default Span;
