import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useHistory } from 'react-router-dom';

import * as Constants from 'src/constants/Constants';

function PestCapturesChart() {
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
                    data: { pest },
                } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}${Constants.DASHBOARDS_PATH}/captures/pest`,
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
                        (index === 0 || month === 'Jan.' ? `20${year}` : '') +
                        month
                    );
                });

                const values = Object.values(pest);
                const maxValue =
                    (Math.ceil(Math.max(...values) / 1000) + 1) * 1000;

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
                    colors: ['#4B5947'],
                    dataLabels: {
                        enabled: true,
                    },
                    stroke: {
                        curve: 'smooth',
                    },
                    title: {
                        text: 'Number of Pest Captures for the Last Year',
                        align: 'center',
                        margin: 5,
                        style: {
                            fontSize: '17px',
                        },
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
                            text: 'Number of captures',
                        },
                        min: 0,
                        max: maxValue,
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
                        data: values,
                    },
                ]);
            } catch (exception) {
                console.log(exception);
            }
        }
        const tick = setInterval(() => {
            getLastYearRecords();
        }, 5000);

        return () => clearInterval(tick);
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

export default PestCapturesChart;
