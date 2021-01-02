import React from 'react';

function BoardBody(props) {
    const { className, thead } = props;
    const tdEx = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

    return (
        <table className={className}>
            <thead>
                <tr>
                    {thead.map((theadItem, index) =>
                        <th key={index}>{theadItem}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2020-08-16</td>
                    <td>공장내부-1</td>
                    <td>블루스톰</td>
                    <td>교체</td>
                </tr>
                {tdEx.map((tde, index) => 
                    <tr key={index}>
                        <td>{tde}</td>
                        <td>2020-08-13</td>
                        <td>공장내부-3</td>
                        <td>블루스톰</td>
                        <td>에러</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default BoardBody;