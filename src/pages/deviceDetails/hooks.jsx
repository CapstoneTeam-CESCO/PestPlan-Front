import { useEffect, useState } from 'react';
import axios from 'axios';

import * as Constants from 'src/constants/Constants';

const useDeviceDetails = deviceId => {
    const [deviceDetails, setDeviceDetails] = useState({
        device: [],
        packets: [],
    });

    useEffect(() => {
        async function getDeviceDetails() {
            try {
                const {
                    data: { device, packets },
                } = await axios.get(
                    `${Constants.SERVER_URL}${Constants.DEVICES_DETAILS_PATH}/${deviceId}`
                );

                setDeviceDetails({
                    device: [
                        device.trap_id,
                        device.region,
                        device.location,
                        device.model_name,
                        device.is_replacement ? 'O' : 'X',
                        device.is_error ? 'O' : 'X',
                    ],
                    packets,
                });
            } catch (exception) {
                throw new Error(exception);
            }
        }

        getDeviceDetails();
    }, []);

    return deviceDetails;
};

export default useDeviceDetails;
