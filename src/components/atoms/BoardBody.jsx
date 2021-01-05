import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import * as Constants from './../../constants/Constants';

const convertType = (type) => {
    if(type === 'Error') return '에러';
    if(type === 'replacement') return '교체';
    return '.';
}

const createEmtyRows = (row_cnt, blank_cnt) => {
    let emptyRows = [];
    for(let i = 1; i <= blank_cnt; i++) {
        emptyRows.push(
            <tr key={row_cnt-blank_cnt+i}>
                <td colSpan="6"></td>
            </tr>
        );
    }
    return emptyRows;
}

function NoticeBoardBody(props) {
    const { className, model, page, thead } = props;
    const [ rows, setRows ] = useState([]);
    let history = useHistory();

    const blank_cnt = Constants.ROW_CNT - rows.length;
    const emptyRows = createEmtyRows(Constants.ROW_CNT, blank_cnt);

    useEffect(() => {
        async function getInfo() {
            const access_token = window.sessionStorage.getItem('access_token');
    
            if(!access_token) {
                console.log('There has no access_token. Go back to the login page.');
    
                history.push('/login');
            }
            
            try {
                const response = await axios.get(`${Constants.HOME_URL}/${model}?access_token=${access_token}&page=${page}`);

                setRows(response.data);
            } catch(exception) {
                console.log('Token has an exception while get informations. Re-login please.');
    
                history.push('/login');
            }
        }

        getInfo();
    }, [page]);

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
                {model==='notices' && rows && rows.map((row, index) => {
                    const { created_at, region, location, model_name, type } = row;
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

                {model==='devices' && rows && rows.map((row, index) => {
                    const { id, model_name, region, location } = row;
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

export default NoticeBoardBody;