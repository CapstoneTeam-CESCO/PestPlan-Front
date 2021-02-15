import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import Image from "../../atoms/image";
import Text from "../../atoms/text";

function ImageText({ className, imageProps, textProps }) {
    return (
        <div className={className}>
            <Image {...imageProps} />
            <Text {...textProps} />
        </div>
    );
}

ImageText.propTypes = {
    className: PropTypes.string,
    imageProps: PropTypes.shape({
        className: PropTypes.string,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }),
    textProps: PropTypes.shape({
        children: PropTypes.string.isRequired,
    }),
};

export default ImageText;
