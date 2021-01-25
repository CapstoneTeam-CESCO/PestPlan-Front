import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Search } from '@material-ui/icons';

import * as Constants from '../../constants/Constants';

export const useUserInfo = () => {
    const [ userInfo, setUserInfo ] = useState({
        device_cnt: 0,
        notice_cnt: 0,
        messages: "",
    });
    let history = useHistory();

    useEffect(() => {
        async function getUserInfo() {
            const access_token = window.sessionStorage.getItem('access_token');
    
            if(!access_token) {
                console.log('There has no access_token. Go back to the login page.');
    
                history.push('/login');
            }
            
            try {
                const response = await axios.get(`${Constants.HOME_URL}/user?access_token=${access_token}`);
                
                const { data: { username, device_cnt, notice_cnt } } = response;
                setUserInfo({
                    device_cnt,
                    notice_cnt,
                    messages: [
                        { className: "medium-size-text", children: `${username}님 반갑습니다.` },
                        { className: "small-size-text inline-text", children: `등록된 기기 수: ${device_cnt}대` }
                    ],
                });
            } catch(exception) {
                console.log('Token has an exception while get informations. Re-login please.');
    
                history.push('/login');
            }
        }
        
        getUserInfo();
    }, []);

    return userInfo;
}

function getItemValues(items) {
    return items
            .filter(item => item.selected)
            .map(item => item.value);
}

export const useDeviceList = (page, filters, handleClickDetail) => {
    const [ deviceList, setDeviceList ] = useState([]);
    let history = useHistory();

    useEffect(() => {
        async function getDeviceList() {
            const access_token = window.sessionStorage.getItem('access_token');
    
            if(!access_token) {
                console.log('There has no access_token. Go back to the login page.');
    
                history.push('/login');
            }
            
            try {
                const { dates, regions, locations, models, types } = filters;
                
                const response = await axios.get(`${Constants.HOME_URL}/devices`, {
                    params: {
                        access_token,
                        page,
                        start: dates[0].startDate,
                        end: dates[0].endDate,
                        regions: getItemValues(regions),
                        locations: getItemValues(locations),
                        models: getItemValues(models),
                        types: getItemValues(types),
                    },
                });
                
                const newDeviceList = response.data.map((data, index) => ({
                    no: index + 1,
                    deviceId: data.id,
                    modelName: data.model_name,
                    region: data.region,
                    location: data.location,
                    detail: (<Search 
                                style={{
                                    fontSize: 20,
                                    verticalAlign: 'middle',
                                    cursor: 'pointer'
                                }}
                                onClick={handleClickDetail} />),
                }));
                
                setDeviceList(newDeviceList);
            } catch(exception) {
                console.log('Token has an exception while get informations. Re-login please.');
    
                history.push('/login');
            }
        }
    
        getDeviceList();
    }, [page, filters]);

    return deviceList;
}

export const useNoticeList = (page, filters) => {
    const [ noticeList, setNoticeList ] = useState([]);
    let history = useHistory();

    useEffect(() => {
        async function getNoticeList() {
            const access_token = window.sessionStorage.getItem('access_token');
    
            if(!access_token) {
                console.log('There has no access_token. Go back to the login page.');
    
                history.push('/login');
            }
            
            try {
                const { dates, regions, locations, models, types } = filters;
                
                const response = await axios.get(`${Constants.HOME_URL}/notices`, {
                    params: {
                        access_token,
                        page,
                        start: dates[0].startDate,
                        end: dates[0].endDate,
                        regions: getItemValues(regions),
                        locations: getItemValues(locations),
                        models: getItemValues(models),
                        types: getItemValues(types),
                    },
                });
                
                const newNoticeList = response.data.map((data, index) => ({
                    no: index + 1,
                    ...data,
                }));

                setNoticeList(newNoticeList);
            } catch(exception) {
                console.log('Token has an exception while get informations. Re-login please.');
    
                history.push('/login');
            }
        }
    
        getNoticeList();
    }, [page, filters]);

    return noticeList;
}

export const useDeviceDetail = (deviceId) => {
    const [ detail, setDetail ] = useState();

    useEffect(() => {
        async function getDeviceDetail(deviceId) {
            try {
                const response = await axios.get(`${Constants.HOME_URL}/detail?device_id=${deviceId}`);
        
                console.log(response);
        
                const { data: { id, is_error, is_replacement, location, model_name, region }} = response;

                setDetail([
                    { first: '트랩 ID', second: id },
                    { first: '지역', second: region },
                    { first: '설치 위치', second: location },
                    { first: '트랩 종류', second: model_name },
                    { first: '교체 필요 여부', second: is_replacement ? "기기의 교체가 필요합니다." : "-" },
                    { first: '에러 여부', second: is_error ? "기기에 에러가 발생했습니다." : "-" }
                ]);
            } catch(exception) {
                console.log(exception);
            }
        }

        getDeviceDetail(deviceId);
    }, [deviceId]);

    return detail;
}