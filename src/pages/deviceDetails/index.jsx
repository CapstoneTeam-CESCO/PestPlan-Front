import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'src/templates/deviceDetails/styles.scss';
import DeviceInfo from 'src/components/organisms/deviceInfo';
import PacketInfo from 'src/components/organisms/packetInfo';
import * as Constants from 'src/constants/Constants';
import useDeviceDetails from './hooks';

function DeviceDetailsPage({
    match: {
        params: { id },
    },
}) {
    const [page, setPage] = useState(1);
    const { device, packets, packetCount } = useDeviceDetails(id, page);

    const packetInfoProps = {
        packets,
        paginationProps: {
            className: 'card__footer board__pagination',
            count: packetCount,
            page,
            setPage,
        },
    };

    const deviceInfoProps = {
        fields: Constants.DEVICE_DETAILS_FIELDS,
        device,
    };

    return (
        <div className="device-details-page">
            <PacketInfo {...packetInfoProps} />
            <DeviceInfo {...deviceInfoProps} />
        </div>
    );
}

DeviceDetailsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
};

export default DeviceDetailsPage;
