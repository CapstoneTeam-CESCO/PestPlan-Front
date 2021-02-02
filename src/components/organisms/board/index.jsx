import React from "react";
import PropTypes from "prop-types";

import Title from "../../atoms/title";
import APagination from "../../atoms/pagination";
import BoardBody from "../../molecules/boardBody";
import FilterTagGroup from "../filterTagGroup";

function Board({
    className,
    titleProps,
    filterTagGroupProps,
    boardBodyProps,
    apaginationProps,
}) {
    return (
        <div className={className}>
            <Title {...titleProps} />
            <FilterTagGroup {...filterTagGroupProps} />
            <BoardBody {...boardBodyProps} />
            <APagination {...apaginationProps} />
        </div>
    );
}

Board.propTypes = {
    className: PropTypes.string,
    titleProps: PropTypes.object,
    filterTagGroupProps: PropTypes.object,
    boardBodyProps: PropTypes.object,
    apaginationProps: PropTypes.object,
};

export default Board;
