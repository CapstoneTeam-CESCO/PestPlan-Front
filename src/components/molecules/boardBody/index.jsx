import React from 'react';

import './styles.scss';

function BoardBody({ className, id, theads, tbodies }) {
    if(theads && tbodies) return (
        <table className={className} id={id}>
            <thead>
                <tr>
                    {theads.map((thead, index) =>
                        <th key={index}>{thead}</th>
                    )}
                </tr>
            </thead>

            <tbody>
                {tbodies.map(tbody => {
                    return (
                        <tr key={tbody.no}>
                            {Object.values(tbody).map(body =>
                                <td key={body}>{body}</td>
                            )}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
    return null;
}

export default BoardBody;