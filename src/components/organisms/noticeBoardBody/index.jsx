import React, { useReducer } from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import Collapse from "../../atoms/collapse";
import ListItem from "../../atoms/listItem";
import List from "../../molecules/list";

const extendedReducer = (state, action) => {
    switch (action.type) {
        case true: {
            const index = state.indexOf(action.value);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        }
        case false:
            return state.concat(action.value);
        default:
            throw new Error(`unexpected action type: ${action.type}`);
    }
};

function NoticeBoardBody({ noticeList, notRead, dispatchNotRead }) {
    const [extended, dispatchExtended] = useReducer(extendedReducer, []);

    const handleClick = event => {
        const clickedId = event.currentTarget.id;

        dispatchExtended({
            type: extended.includes(clickedId),
            value: clickedId,
        });

        if (notRead.includes(clickedId)) {
            dispatchNotRead({ type: "click_notice", value: clickedId });
        }
    };

    return noticeList.map(notice => {
        const values = Object.values(notice);
        const rowClassName = "list__row".concat(
            notRead.includes(values[6]) ? " notRead" : ""
        );

        return (
            <ListItem
                button
                key={values[6]}
                id={values[6]}
                className="list--body button--root"
                onClick={handleClick}
            >
                <List
                    className={rowClassName}
                    items={values.slice(0, 6)}
                    itemProps={{ className: "list__row__item" }}
                />

                <Collapse
                    className="list__detail"
                    isOpen={extended.includes(values[6])}
                >
                    <pre>{values[7]}</pre>
                </Collapse>
            </ListItem>
        );
    });
}

NoticeBoardBody.propTypes = {
    noticeList: PropTypes.array,
    notRead: PropTypes.array,
    dispatchNotRead: PropTypes.func,
};

export default NoticeBoardBody;
