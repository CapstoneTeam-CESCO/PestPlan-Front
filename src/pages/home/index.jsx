import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import HomeTmpl from './../../templates/HomeTmpl';

function HomePage() {
    let history = useHistory();
    const [ isLoading, setLoading ] = useState(true);
    const [ info, setInfo ] = useState({
        userInfo: {
            username: "",
            device_cnt: 0,
        },
        devices: [],
        notices: [],
    });

    useEffect(() => {
        async function getInfo() {
            const access_token = window.sessionStorage.getItem('access_token');
    
            if(!access_token) {
                console.log('There has no access_token. Go back to the login page.');
    
                history.push('/login');
            }
            
            try {
                const response = await axios.get(`http://localhost:4000/home/getInfo?access_token=${access_token}`);
    
                console.log('Get username and device number from the server successfully.');

                const { data: { username, device_cnt, devices, notices }} = response;
                setInfo({
                    userInfo: {
                        username,
                        device_cnt,
                    },
                    devices,
                    notices,
                });
            } catch(exception) {
                console.log('Token has an exception while get informations. Re-login please.');
    
                history.push('/login');
            }

            setLoading(false);
        }

        getInfo();
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