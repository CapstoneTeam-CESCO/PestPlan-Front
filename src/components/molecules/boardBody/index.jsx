import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function BoardBody({ className, id, theads, tbodies }) {
    if (theads && tbodies)
        return (
            <table className={className} id={id}>
                <thead>
                    <tr>
                        {theads.map(thead => (
                            <th key={thead}>{thead}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {tbodies.map(tbody => {
                        return (
                            <tr key={tbody.no}>
                                {Object.values(tbody).map(body => (
                                    <td key={body}>{body}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    return null;
}

BoardBody.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    theads: PropTypes.array,
    tbodies: PropTypes.array,
};

export default BoardBody;
