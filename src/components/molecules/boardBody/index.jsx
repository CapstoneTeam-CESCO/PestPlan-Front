import React, { useReducer } from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import Button from "../../atoms/button";
import Collapse from "../../atoms/collapse";

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

function BoardBody({ className, id, heads, bodies, hasDetail }) {
    const [extended, dispatchExtended] = useReducer(extendedReducer, []);

    const handleClick = event => {
        const clickedId = parseInt(event.currentTarget.id, 10);

        dispatchExtended({
            type: extended.includes(clickedId),
            value: clickedId,
        });
    };

    return (
        <div className={className} id={id}>
            <div className="board__header">
                <ul className="board-row">
                    {heads &&
                        heads.map(thead => (
                            <li key={thead} className="board-element">
                                {thead}
                            </li>
                        ))}
                </ul>
            </div>

            {bodies.map(body => (
                <div key={body.no} className="board__body">
                    <Button
                        type="button"
                        className="button--root"
                        id={body.no}
                        onClick={handleClick}
                    >
                        <ul className="board-row">
                            {Object.values(body).map(element => (
                                <li key={element} className="board-element">
                                    {element}
                                </li>
                            ))}
                        </ul>
                    </Button>

                    {hasDetail && (
                        <Collapse
                            className="notice-detail"
                            isOpen={extended.includes(body.no)}
                        >
                            hidden
                        </Collapse>
                    )}
                </div>
            ))}
        </div>
    );
}

BoardBody.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    heads: PropTypes.array,
    bodies: PropTypes.array,
    hasDetail: PropTypes.bool,
};

export default BoardBody;
