import { useEffect, useState } from 'react';
import axios from 'axios';

import * as Constants from 'src/constants/Constants';

const useDeviceDetails = deviceId => {
    const [details, setDetails] = useState();

    useEffect(() => {
        async function getDeviceDetails() {
            try {
                const { data } = await axios.get(
                    `${Constants.SERVER_URL}${Constants.DEVICES_DETAILS_PATH}/${deviceId}`
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
