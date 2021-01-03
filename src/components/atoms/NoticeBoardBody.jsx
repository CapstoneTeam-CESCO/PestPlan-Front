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
                <td></td>
            </tr>
        );
    }
    return emptyRows;
}

const convertType = (type) => {
    if(type === 'Error') return '에러';
    if(type === 'replacement') return '교체';
    return '.';
}

function NoticeBoardBody(props) {
    const { className, notices } = props;
    const thead = ['알림No.', '날짜', '지역', '설치 위치', '트랩 종류', '교체/에러'];

    const row_cnt = 15;
    const blank_cnt = (notices ? row_cnt-notices.length : row_cnt);
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
                {notices && notices.map((notice, index) => {
                    const { created_at, region, location, model_name, type } = notice;
                    const key = index + 1;
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{created_at}</td>
                            <td>{region}</td>
                            <td>{location}</td>
                            <td>{model_name}</td>
                            <td>{convertType(type)}</td>
                        </tr>
                    );
                })}

                {emptyRows}
            </tbody>
        </table>
    );
}

export default NoticeBoardBody;