import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import ListItem from "../../atoms/listItem";
import Title from "../../atoms/title";
import APagination from "../../atoms/pagination";
import List from "../../molecules/list";
import DeviceBoardBody from "../deviceBoardBody";
import FilterTagGroup from "../filterTagGroup";
import NoticeBoardBody from "../noticeBoardBody";

function Board({
    className,
    titleProps,
    filterTagGroupProps,
    boardProps,
    boardHeaderProps,
    type,
    boardBodyProps,
    apaginationProps,
}) {
    return (
        <div className={className}>
            <Title {...titleProps} />
            <FilterTagGroup {...filterTagGroupProps} />

            <List {...boardProps}>
                <ListItem className="board__header board-body-list">
                    <List
                        className="board-row"
                        items={boardHeaderProps.headItems}
                        itemProps={{ className: "board-element" }}
                    />
                </ListItem>

                {type === "notice" && <NoticeBoardBody {...boardBodyProps} />}
                {type === "device" && <DeviceBoardBody {...boardBodyProps} />}
            </List>

            <APagination {...apaginationProps} />
        </div>
    );
}

Board.propTypes = {
    className: PropTypes.string,
    titleProps: PropTypes.object,
    filterTagGroupProps: PropTypes.object,
    boardProps: PropTypes.object,
    boardHeaderProps: PropTypes.object,
    type: PropTypes.string,
    boardBodyProps: PropTypes.object,
    apaginationProps: PropTypes.object,
};

export default Board;
