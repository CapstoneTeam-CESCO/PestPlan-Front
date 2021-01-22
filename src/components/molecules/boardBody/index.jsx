import React from 'react';

import './styles.scss';
import EmptyRows from '../../atoms/emptyRows';

function BoardBody({ className, id, theads, tbodies, emptyRows }) {
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
                        <tr key={tbody.id}>
                            {Object.values(tbody).map(body =>
                                <td key={body}>{body}</td>
                            )}
                        </tr>
                    );
                })}

                <EmptyRows
                    colSpan={emptyRows.colSpan}
                    count={emptyRows.count}
                    startKey={tbodies.length+1} />
            </tbody>
        </table>
    );
    return null;
}

export default BoardBody;