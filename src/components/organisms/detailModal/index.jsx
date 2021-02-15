import React from "react";
import PropTypes from "prop-types";
import { Close } from "@material-ui/icons";

import "./styles.scss";
import Title from "../../atoms/title";
import BoardBody from "../../molecules/boardBody";

const DetailModal = React.forwardRef(
    (
        {
            detailModalProps: {
                className,
                closeProps,
                titleProps,
                boardBodyProps,
            },
        },
        ref
    ) => {
        return (
            <div className={className} ref={ref}>
                <Close {...closeProps} />
                <Title {...titleProps} />
                <BoardBody {...boardBodyProps} />
            </div>
        );
    }
);

DetailModal.propTypes = {
    detailModalProps: PropTypes.shape({
        className: PropTypes.string,
        closeProps: PropTypes.object,
        titleProps: PropTypes.object,
        boardBodyProps: PropTypes.object,
    }),
};

export default DetailModal;
