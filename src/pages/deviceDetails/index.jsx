import React from 'react';
import PropTypes from 'prop-types';

import useDeviceDetails from './hooks';

function DeviceDetailsPage({
    match: {
        params: { id },
    },
}) {
    const deviceDetails = useDeviceDetails(id);
    console.log(deviceDetails);

    const { device } = deviceDetails;

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>트랩ID</td>
                        <td>{device.trap_id}</td>
                    </tr>
                    <tr>
                        <td>지역</td>
                        <td>{device.region}</td>
                    </tr>
                    <tr>
                        <td>설치 위치</td>
                        <td>{device.location}</td>
                    </tr>
                    <tr>
                        <td>트랩 종류</td>
                        <td>{device.model_name}</td>
                    </tr>
                    <tr>
                        <td>교체 필요 여부</td>
                        <td>{device.needs_replacement}</td>
                    </tr>
                    <tr>
                        <td>정상 작동 여부</td>
                        <td>{device.is_error}</td>
                    </tr>
                    <tr>
                        <td>마지막 데이터 송신 시간</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
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
