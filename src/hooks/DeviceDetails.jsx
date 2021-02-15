import { useEffect, useState } from "react";
import axios from "axios";

import * as Constants from "../constants/Constants";

const useDeviceDetails = deviceId => {
    const [details, setDetails] = useState();

    useEffect(() => {
        async function getDeviceDetails() {
            try {
                const response = await axios.get(
                    `${Constants.HOME_URL}/devices/details/${deviceId}`
                );

                setDetails(response.data);
            } catch (exception) {
                throw new Error(exception);
            }
        }

        getDeviceDetails();
    }, []);

    return details;
};

export default useDeviceDetails;
