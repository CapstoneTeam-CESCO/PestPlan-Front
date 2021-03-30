import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import * as Constants from 'src/constants/Constants';

const useUserName = () => {
    const [userName, setUserName] = useState('');
    const history = useHistory();

    useEffect(() => {
        async function getUserName() {
            const accessToken = window.sessionStorage.getItem('access_token');

            if (!accessToken) {
                console.log(
                    'There has no access_token. Go back to the login page.'
                );

                history.push(Constants.LOGIN_PATH);
            }

            try {
                const {
                    data: { username },
                } = await axios.get(
                    `${Constants.SERVER_URL}${Constants.USER_PATH}`,
                    {
                        params: {
                            access_token: accessToken,
                        },
                    }
                );

                setUserName(username);
            } catch (exception) {
                console.log(
                    'Token has an exception while get informations. Re-login please.'
                );

                history.push(Constants.LOGIN_PATH);
            }
        }

        getUserName();
    }, []);

    return userName;
};

export default useUserName;
