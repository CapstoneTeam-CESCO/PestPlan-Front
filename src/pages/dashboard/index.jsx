import React from 'react';

import 'src/templates/dashboard/styles.scss';
import DevicesByRegionChart from 'src/components/organisms/chart/DevicesByRegionChart';
import RecordsChart from 'src/components/organisms/chart/RecordsChart';
import DeviceStatusChart from 'src/components/organisms/chart/DeviceStatusChart';

function DashboardPage() {
    return (
        <div className="dashboard-page App-main__contents">
            <RecordsChart />
            <DevicesByRegionChart />
            <DeviceStatusChart />
        </div>
    );
}

export default DashboardPage;
