import React from "react";
import PropTypes from "prop-types";

import useDeviceDetails from "../../hooks/DeviceDetails";

function DeviceDetailsPage({
    match: {
        params: { id },
    },
}) {
    const deviceDetails = useDeviceDetails(id);
    console.log(deviceDetails);

    return <div>details</div>;
}

DeviceDetailsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
};

export default DeviceDetailsPage;
