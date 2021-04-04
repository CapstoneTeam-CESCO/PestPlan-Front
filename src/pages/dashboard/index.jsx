import React from 'react';

import 'src/templates/dashboard/styles.scss';
import DevicesByRegionChart from 'src/components/organisms/chart/DevicesByRegionChart';

function DashboardPage() {
    return (
        <div className="dashboard-page App-main__contents">
            <DevicesByRegionChart />
        </div>
    );
}

export default DashboardPage;
