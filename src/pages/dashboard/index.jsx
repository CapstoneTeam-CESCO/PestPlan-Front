import React from 'react';

import 'src/templates/dashboard/styles.scss';
import DevicesByRegionChart from 'src/components/organisms/chart/DevicesByRegionChart';
import DeviceStatusChart from 'src/components/organisms/chart/DeviceStatusChart';
import PestCapturesChart from 'src/components/organisms/chart/PestCapturesChart';
import MouseCapturesChart from 'src/components/organisms/chart/MouseCapturesChart';

function DashboardPage() {
    return (
        <div className="dashboard-page App-main__contents">
            <div className="row1">
                <DeviceStatusChart />
                <DevicesByRegionChart />
            </div>
            <div className="row2">
                <PestCapturesChart />
                <MouseCapturesChart />
            </div>
        </div>
    );
}

export default DashboardPage;
