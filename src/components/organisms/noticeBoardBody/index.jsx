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

function NoticeBoardBody({ noticeList }) {
    const [extended, dispatchExtended] = useReducer(extendedReducer, []);

    const handleClick = event => {
        const clickedId = parseInt(event.currentTarget.id, 10);

        dispatchExtended({
            type: extended.includes(clickedId),
            value: clickedId,
        });
    };

    return noticeList.map(notice => {
        const values = Object.values(notice);

        return (
            <ListItem
                button
                key={values[0]}
                id={values[0]}
                className="list--body button--root"
                onClick={handleClick}
            >
                <List
                    className="list__row"
                    items={values.slice(0, 6)}
                    itemProps={{ className: "list__row__item" }}
                />

                <Collapse
                    className="list__detail"
                    isOpen={extended.includes(values[0])}
                >
                    <pre>{values.slice(7)}</pre>
                </Collapse>
            </ListItem>
        );
    });
}

NoticeBoardBody.propTypes = {
    noticeList: PropTypes.array,
};

export default NoticeBoardBody;
