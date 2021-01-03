import React from 'react';

const createEmtyRows = (row_cnt, blank_cnt) => {
    let emptyRows = [];
    for(let i = 1; i <= blank_cnt; i++) {
        emptyRows.push(
            <tr key={row_cnt-blank_cnt+i}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }
    return emptyRows;
}

function NoticeBoardBody(props) {
    const { className } = props;
    const thead = ['알림No.', '날짜', '설치 위치', '트랩 종류', '교체/에러'];
    
    const row_cnt = 15;
    const blank_cnt = 15;
    const emptyRows = createEmtyRows(row_cnt, blank_cnt);

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
                

                {emptyRows}
            </tbody>
        </table>
    );
}

export default NoticeBoardBody;