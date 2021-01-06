import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Search } from '@material-ui/icons';
import { Modal } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

function NoticeBoardBody(props) {
    const { className, model, page, thead } = props;
    const [ rows, setRows ] = useState([]);
    const [ body, setBody ] = useState(<div/>);
    const [ open, setOpen ] = useState(false);
    const classes = useStyles();
    let history = useHistory();

    const blank_cnt = Constants.ROW_CNT - rows.length;
    const emptyRows = createEmtyRows(Constants.ROW_CNT, blank_cnt);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = async (event) => {
        const device_id = event.currentTarget.parentNode.parentNode.childNodes[1].innerText;

        try {
            const response = await axios.get(`${Constants.HOME_URL}/detail?device_id=${device_id}`);
    
            console.log(response);
    
            const { data: { id, is_error, is_replacement, location, model_name, region }} = response;

            setBody(
                <div className={classes.modal}>
                    <h1 id="detail-modal-title">기기 상세 정보</h1>
                    <table id="detail-modal-description">
                        <thead>
                            <tr>
                                <th>상세 정보</th>
                                <th>내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>트랩 ID</td>
                                <td>{id}</td>
                            </tr>
                            <tr>
                                <td>지역</td>
                                <td>{region}</td>
                            </tr>
                            <tr>
                                <td>설치 위치</td>
                                <td>{location}</td>
                            </tr>
                            <tr>
                                <td>트랩 종류</td>
                                <td>{model_name}</td>
                            </tr>
                            <tr>
                                <td>교체 필요 여부</td>
                                <td>{is_replacement}</td>
                            </tr>
                            <tr>
                                <td>에러 여부</td>
                                <td>{is_error}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );

            setOpen(true);
        } catch(exception) {
            console.log(exception);
        }
    };

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
        <div>
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
                                <td><Search 
                                        style={{
                                            fontSize: 20,
                                            verticalAlign: 'middle',
                                            cursor: 'pointer'
                                        }}
                                        onClick={handleClick} /></td>
                            </tr>
                        );
                    })}

                    {emptyRows}
                </tbody>
            </table>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="detail-modal-title"
                aria-describedby="detail-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default NoticeBoardBody;