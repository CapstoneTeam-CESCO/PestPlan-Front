import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import * as Constants from "../constants/Constants";

const useUserName = () => {
    const [userName, setUserName] = useState("");
    const history = useHistory();

    useEffect(() => {
        async function getUserName() {
            const accessToken = window.sessionStorage.getItem("access_token");

            if (!accessToken) {
                console.log(
                    "There has no access_token. Go back to the login page."
                );

                history.push(Constants.LOGIN_URL);
            }

            try {
                const {
                    data: { username },
                } = await axios.get(Constants.USER_URL, {
                    params: {
                        access_token: accessToken,
                    },
                });

                setUserName(username);
            } catch (exception) {
                console.log(
                    "Token has an exception while get informations. Re-login please."
                );

                history.push(Constants.LOGIN_URL);
            }
        }

        getUserName();
    }, []);

    return userName;
};

export default useUserName;
