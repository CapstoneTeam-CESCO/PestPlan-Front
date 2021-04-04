import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useHistory } from 'react-router-dom';

import * as Constants from 'src/constants/Constants';

function DevicesByRegionChart() {
    const categories = Constants.REGIONS.map(region => region.value);

    const history = useHistory();
    const [series, setSeries] = useState([
        {
            name: 'devices',
            data: [],
        },
    ]);
    const options = {
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetY: -25,
            style: {
                colors: ['#000'],
            },
        },
        xaxis: {
            categories,
            position: 'bottom',
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#d8e3f0',
                        colorTo: '#bed1e6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            min: 0,
            max: 10,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: true,
            },
        },
        title: {
            text: 'Number of Devices by City',
            align: 'center',
            style: {
                color: '#444',
            },
        },
        noData: {
            text: 'Loading...',
        },
    };

    useEffect(() => {
        async function getDevicesByCity() {
            const accessToken = window.sessionStorage.getItem('access_token');

            if (!accessToken) {
                console.log(
                    'There has no access_token. Go back to the login page.'
                );

                history.push(Constants.LOGIN_PATH);
            }

            try {
                const response = await axios.get(
                    `${Constants.SERVER_URL}${Constants.DASHBOARDS_PATH}/devices`,
                    {
                        params: {
                            access_token: accessToken,
                        },
                    }
                );

                const data = categories.map(region =>
                    response.data[region] ? response.data[region] : 0
                );

                setSeries([
                    {
                        ...series,
                        data,
                    },
                ]);
            } catch (exception) {
                console.log(exception);
            }
        }

        getDevicesByCity();
    }, []);

    return (
        <div className="chart--devices-by-city">
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
            />
        </div>
    );
}

export default DevicesByRegionChart;
