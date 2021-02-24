import React from 'react';
import PropTypes from 'prop-types';

import DeviceInfo from 'src/components/organisms/deviceInfo';
import * as Constants from 'src/constants/Constants';
import useDeviceDetails from './hooks';

function DeviceDetailsPage({
    match: {
        params: { id },
    },
}) {
    const { device } = useDeviceDetails(id);

    const deviceInfoProps = {
        fields: Constants.DEVICE_DETAILS_FIELDS,
        device,
    };

    return (
        <div>
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
