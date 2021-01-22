import React from 'react';

function EmptyRows({ colSpan, count, startKey }) {
    let emptyRows = [];

    for(let i = 0; i < count; i++) {
        emptyRows.push(
            <tr key={startKey+i}>
                <td colSpan={colSpan}></td>
            </tr>
        );
    }

    return emptyRows;
}

export default EmptyRows;