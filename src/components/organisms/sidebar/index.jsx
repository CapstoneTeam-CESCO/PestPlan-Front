import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import * as Constants from 'src/constants/Constants';
import SidebarBtn from 'src/components/molecules/sidebarBtn';
import Image from 'src/components/atoms/image';
import LogoImage from 'src/images/logo--white.png';
import DashboardImage from 'src/images/dashboard.png';
import PacketImage from 'src/images/packet.png';
import DeviceImage from 'src/images/device.png';

function Sidebar({ currentPath }) {
    return (
        <div className="App-main__sidebar">
            <Image
                className="sidebar__team-name"
                src={LogoImage}
                alt={Constants.TEAM_NAME}
            />

            <div className="sidebar__menu">
                <SidebarBtn
                    current={currentPath}
                    next={Constants.DASHBOARDS_PATH}
                    src={DashboardImage}
                    btnChildren={Constants.DASHBOARD}
                />

                <SidebarBtn
                    current={currentPath}
                    next={Constants.PACKETS_PATH}
                    src={PacketImage}
                    btnChildren={Constants.PACKET}
                />

                <SidebarBtn
                    current={currentPath}
                    next={Constants.DEVICES_PATH}
                    src={DeviceImage}
                    btnChildren={Constants.DEVICE}
                />
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    currentPath: PropTypes.string,
};

export default Sidebar;
