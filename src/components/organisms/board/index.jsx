import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import ListItem from "../../atoms/listItem";
import APagination from "../../atoms/pagination";
import Span from "../../atoms/span";
import Title from "../../atoms/title";
import List from "../../molecules/list";
import DeviceBoardBody from "../deviceBoardBody";
import FilterTagGroup from "../filterTagGroup";
import NoticeBoardBody from "../noticeBoardBody";

function Board({
    className,
    headerProps,
    titleProps,
    notReadChildrens,
    filterTagGroupProps,
    boardProps,
    boardHeaderProps,
    type,
    boardBodyProps,
    apaginationProps,
}) {
    return (
        <div className={className}>
            <div {...headerProps}>
                <Title {...titleProps} />
                {type === "notice" &&
                    notReadChildrens.map(props => <Span {...props} />)}
            </div>
            <FilterTagGroup {...filterTagGroupProps} />

            <List {...boardProps}>
                <ListItem className="list--header">
                    <List
                        className="list__row"
                        items={boardHeaderProps.headItems}
                        itemProps={{ className: "list__row__item" }}
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
    headerProps: PropTypes.object,
    titleProps: PropTypes.object,
    notReadChildrens: PropTypes.array,
    filterTagGroupProps: PropTypes.object,
    boardProps: PropTypes.object,
    boardHeaderProps: PropTypes.object,
    type: PropTypes.string,
    boardBodyProps: PropTypes.object,
    apaginationProps: PropTypes.object,
};

export default Board;
