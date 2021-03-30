import { useEffect, useState } from 'react';
import axios from 'axios';

import * as Constants from 'src/constants/Constants';

const useDeviceDetails = (deviceId, page) => {
    const [deviceDetails, setDeviceDetails] = useState({
        device: [],
        packets: [],
        packetCount: 0,
    });

    useEffect(() => {
        async function getDeviceDetails() {
            try {
                const {
                    data: { device, packets, packetCount },
                } = await axios.get(
                    `${Constants.SERVER_URL}${Constants.DEVICES_DETAILS_PATH}/${deviceId}`,
                    {
                        params: {
                            page,
                            row: Constants.ROW,
                        },
                    }
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
                    packetCount,
                });
            } catch (exception) {
                throw new Error(exception);
            }
        }

        getDeviceDetails();
    }, [deviceId, page]);

    return deviceDetails;
};

export default useDeviceDetails;
