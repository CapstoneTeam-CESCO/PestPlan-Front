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
    const [options, setOptions] = useState({
        noData: {
            text: 'Loading...',
        },
    });

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
                    `${process.env.REACT_APP_SERVER_URL}${Constants.DASHBOARDS_PATH}/devices`,
                    {
                        params: {
                            access_token: accessToken,
                        },
                    }
                );

                const data = categories.map(region =>
                    response.data[region] ? response.data[region] : 0
                );

                const yaxisMax = Math.ceil(Math.max.apply(null, data)) + 10;

                setSeries([
                    {
                        ...series,
                        data,
                    },
                ]);

                setOptions({
                    plotOptions: {
                        bar: {
                            borderRadius: 10,
                            dataLabels: {
                                position: 'top',
                            },
                        },
                    },
                    colors: ['#778C8C'],
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
                        title: {
                            text: 'Regions',
                        },
                    },
                    yaxis: {
                        min: 0,
                        max: yaxisMax,
                        axisBorder: {
                            show: false,
                        },
                        axisTicks: {
                            show: false,
                        },
                        labels: {
                            show: true,
                        },
                        title: {
                            text: 'Number of devices',
                        },
                    },
                    title: {
                        text: 'Number of Devices by Regions',
                        align: 'center',
                        margin: 5,
                        style: {
                            fontSize: '17px',
                        },
                    },
                });
            } catch (exception) {
                console.log(exception);
            }
        }

        getDevicesByCity();
    }, []);

    return (
        <div className="card chart--devices-by-city">
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
