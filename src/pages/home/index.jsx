import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import HomeTmpl from './../../templates/HomeTmpl';
import * as Constants from './../../constants/Constants';

function HomePage() {
    let history = useHistory();
    const [ isLoading, setLoading ] = useState(true);
    const [ info, setInfo ] = useState({
        username: "",
        device_cnt: 0,
        notice_cnt: 0,
    });

    useEffect(() => {
        async function getUserInfo() {
            const access_token = window.sessionStorage.getItem('access_token');
    
            if(!access_token) {
                console.log('There has no access_token. Go back to the login page.');
    
                history.push('/login');
            }
            
            try {
                const response = await axios.get(`${Constants.HOME_URL}/user?access_token=${access_token}`);
    
                console.log('Get username and device number from the server successfully.');
                console.log(response);

                const { data: { username, device_cnt, notice_cnt }} = response;
                setInfo({
                    username,
                    device_cnt,
                    notice_cnt,
                });
            } catch(exception) {
                console.log('Token has an exception while get informations. Re-login please.');
    
                history.push('/login');
            }

            setLoading(false);
        }

        getUserInfo();
    }, []);

    if(isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="homePage">
            <HomeTmpl info={info} />
        </div>
    );
}

export default HomePage;