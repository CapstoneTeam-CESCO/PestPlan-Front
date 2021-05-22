import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useHistory } from 'react-router-dom';

import * as Constants from 'src/constants/Constants';

function RecordsChart() {
    const monthNumToStr = {
        '01': 'Jan.',
        '02': 'Feb.',
        '03': 'Mar.',
        '04': 'Apr.',
        '05': 'May.',
        '06': 'Jun.',
        '07': 'Jul.',
        '08': 'Aug.',
        '09': 'Sept.',
        10: 'Oct.',
        11: 'Nov.',
        12: 'Dec.',
    };

    const history = useHistory();
    const [series, setSeries] = useState([
        {
            name: 'pest',
            data: [],
        },
        {
            name: 'mouse',
            data: [],
        },
    ]);

    const [options, setOptions] = useState({
        noData: {
            text: 'Loading...',
        },
    });

    useEffect(() => {
        async function getLastYearRecords() {
            const accessToken = window.sessionStorage.getItem('access_token');

            if (!accessToken) {
                console.log(
                    'There has no access_token. Go back to the login page.'
                );

                history.push(Constants.LOGIN_PATH);
            }

            try {
                const {
                    data: { pest, mouse },
                } = await axios.get(
                    `${Constants.SERVER_URL}${Constants.DASHBOARDS_PATH}/records`,
                    {
                        params: {
                            access_token: accessToken,
                        },
                    }
                );

                const categories = Object.keys(pest).map((time, index) => {
                    const year = time.slice(0, 2);
                    const month = monthNumToStr[time.slice(2)];

                    return (
                        (index === 0 || month === 'Jan.' ? `20${year} ` : '') +
                        month
                    );
                });

                setOptions({
                    ...options,
                    chart: {
                        dropShadow: {
                            enabled: true,
                            color: '#000',
                            top: 18,
                            left: 7,
                            blur: 10,
                            opacity: 0.2,
                        },
                        toolbar: {
                            show: false,
                        },
                    },
                    colors: ['#77b6ea', '#545454'],
                    dataLabels: {
                        enabled: true,
                    },
                    stroke: {
                        curve: 'smooth',
                    },
                    title: {
                        text: 'Records for the last year',
                        align: 'left',
                    },
                    grid: {
                        borderColor: '#e7e7e7',
                        row: {
                            colors: ['#f3f3f3', '#transparent'],
                            opacity: 0.01,
                        },
                    },
                    markers: {
                        size: 1,
                    },
                    xaxis: {
                        categories,
                        title: {
                            text: 'Month',
                        },
                    },
                    yaxis: {
                        title: {
                            text: 'Number of capture',
                        },
                        min: 0,
                        max: 100,
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'right',
                        floating: true,
                        offsetY: -25,
                        offsetX: -5,
                    },
                });
                setSeries([
                    {
                        name: 'pest',
                        data: Object.values(pest),
                    },
                    {
                        name: 'mouse',
                        data: Object.values(mouse),
                    },
                ]);
            } catch (exception) {
                console.log(exception);
            }
        }

        getLastYearRecords();
    }, []);

    return (
        <div className="card chart--last-year">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
            />
        </div>
    );
}

export default RecordsChart;
