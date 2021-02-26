import React from 'react';
import PropTypes from 'prop-types';

import DeviceInfo from 'src/components/organisms/deviceInfo';
import PacketInfo from 'src/components/organisms/packetInfo';
import * as Constants from 'src/constants/Constants';
import useDeviceDetails from './hooks';

function DeviceDetailsPage({
    match: {
        params: { id },
    },
}) {
    const { device, packets } = useDeviceDetails(id);

    const deviceInfoProps = {
        fields: Constants.DEVICE_DETAILS_FIELDS,
        device,
    };

    const packetInfoProps = {
        packets,
        listProps: {
            className: 'device-details--packet',
        },
        listItemProps: {
            className: 'packet__list',
        },
        collapseProps: {
            className: 'packet__detail',
        },
    };

    return (
        <div>
            <DeviceInfo {...deviceInfoProps} />
            <PacketInfo {...packetInfoProps} />
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
