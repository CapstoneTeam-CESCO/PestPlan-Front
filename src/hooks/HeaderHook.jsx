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

                history.push("/login");
            }

            try {
                const response = await axios.get(
                    `${Constants.HOME_URL}/user?access_token=${accessToken}`
                );

                const {
                    data: { username },
                } = response;

                setUserName(username);
            } catch (exception) {
                console.log(
                    "Token has an exception while get informations. Re-login please."
                );

                history.push("/login");
            }
        }

        getUserName();
    }, []);

    return userName;
};

export default useUserName;
