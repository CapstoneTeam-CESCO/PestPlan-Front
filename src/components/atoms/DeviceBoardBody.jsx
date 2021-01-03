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

function DeviceBoardBody(props) {
    const { className, devices } = props;
    const thead = ['No.', '트랩 id', '트랩 종류', '지역', '설치 위치', '상세 정보'];
    
    const row_cnt = 15;
    const blank_cnt = (devices ? row_cnt-devices.length : row_cnt);
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
                {devices && devices.map((device, index) => {
                    const { id, model_name, region, location } = device;
                    const key = index + 1;
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{id}</td>
                            <td>{model_name}</td>
                            <td>{region}</td>
                            <td>{location}</td>
                            <td>돋보기</td>
                        </tr>
                    );
                })}

                {emptyRows}
            </tbody>
        </table>
    );
}

export default DeviceBoardBody;