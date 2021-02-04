import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import Button from "../../atoms/button";

function BoardBody({ className, id, theads, tbodies, buttonProps }) {
    if (theads && tbodies)
        return (
            <div className={className} id={id}>
                <div className="board__header">
                    <ul className="board-row">
                        {theads.map(thead => (
                            <li key={thead} className="board-element">
                                {thead}
                            </li>
                        ))}
                    </ul>
                </div>

                {tbodies.map(tbody => (
                    <div key={tbody.no} className="board__body">
                        <Button {...buttonProps}>
                            <ul className="board-row">
                                {Object.values(tbody).map(body => (
                                    <li key={body} className="board-element">
                                        {body}
                                    </li>
                                ))}
                            </ul>
                        </Button>
                        <div className="notice-detail closed">hidden</div>
                    </div>
                ))}
            </div>
        );
    return null;
}

BoardBody.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    theads: PropTypes.array,
    tbodies: PropTypes.array,
    buttonProps: PropTypes.shape({
        type: PropTypes.string,
        className: PropTypes.string,
    }),
};

export default BoardBody;
