import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import * as Constants from '../constants/Constants';

export const useUsername = () => {
    const [ username, setUsername ] = useState("");
    const history = useHistory();

    useEffect(() => {
        async function getUsername() {
            const access_token = window.sessionStorage.getItem('access_token');
    
            if(!access_token) {
                console.log('There has no access_token. Go back to the login page.');
    
                history.push('/login');
            }
            
            try {
                const response = await axios.get(`${Constants.HOME_URL}/user?access_token=${access_token}`);
                
                const { data: { username } } = response;
                setUsername(username);
            } catch(exception) {
                console.log('Token has an exception while get informations. Re-login please.');
    
                history.push('/login');
            }
        }
        
        getUsername();
    }, []);

    return username;
}