import { useEffect, useState } from "react";
import axios from "axios";

import * as Constants from "../constants/Constants";

const useDeviceDetails = deviceId => {
    const [details, setDetails] = useState();

    useEffect(() => {
        async function getDeviceDetails() {
            try {
                const { data } = await axios.get(
                    `${Constants.DEVICES_DETAILS_URL}/${deviceId}`
                );

                setDetails(data);
            } catch (exception) {
                throw new Error(exception);
            }
        }

        getDeviceDetails();
    }, []);

    return details;
};

export default useDeviceDetails;
