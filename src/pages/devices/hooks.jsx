import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import * as Constants from 'src/constants/Constants';
import { getItemValues, getFilterLabel } from 'src/utilities/FilterUtility';

export const useDeviceCount = () => {
    const [deviceCount, setDeviceCount] = useState(0);
    const history = useHistory();

    useEffect(() => {
        async function getDeviceCount() {
            const accessToken = window.sessionStorage.getItem('access_token');

            if (!accessToken) {
                console.log(
                    'There has no access_token. Go back to the login page.'
                );

                history.push(Constants.LOGIN_PATH);
            }

            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}${Constants.USER_PATH}`,
                    {
                        params: {
                            access_token: accessToken,
                        },
                    }
                );

                setDeviceCount(data.device_cnt);
            } catch (exception) {
                console.log(
                    'Token has an exception while get informations. Re-login please.'
                );

                history.push(Constants.LOGIN_PATH);
            }
        }

        getDeviceCount();
    }, []);

    return deviceCount;
};

export const useDeviceInfos = () => {
    const [deviceInfos, setDeviceInfos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getDeviceInfos() {
            const accessToken = window.sessionStorage.getItem('access_token');

            if (!accessToken) {
                console.log(
                    'There has no access_token. Go back to the login page.'
                );

                history.push(Constants.LOGIN_PATH);
            }

            try {
                const {
                    data: { total, pest, mouse, error },
                } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}${Constants.DEVICES_PATH}/infos`,
                    {
                        params: {
                            access_token: accessToken,
                        },
                    }
                );

                setDeviceInfos([total, pest, mouse, error]);
            } catch (exception) {
                console.log(exception);
            }
        }

        getDeviceInfos();
    }, []);

    return deviceInfos;
};

export const useDeviceList = (page, filters) => {
    const [deviceList, setDeviceList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getDeviceList() {
            const accessToken = window.sessionStorage.getItem('access_token');

            if (!accessToken) {
                console.log(
                    'There has no access_token. Go back to the login page.'
                );

                history.push(Constants.LOGIN_PATH);
            }

            try {
                const { regions, locations, models } = filters;

                const { data } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}${Constants.DEVICES_PATH}`,
                    {
                        params: {
                            access_token: accessToken,
                            page,
                            row: Constants.ROW,
                            regions: getItemValues(regions),
                            locations: getItemValues(locations),
                            models: getItemValues(models),
                        },
                    }
                );

                const newDeviceList = data.map((device, index) => ({
                    no: index + 1,
                    deviceId: device.trap_id,
                    region: device.region,
                    location: device.location,
                    modelName: device.model_name,
                }));

                setDeviceList(newDeviceList);
            } catch (exception) {
                console.log(
                    'Token has an exception while get informations. Re-login please.'
                );

                history.push(Constants.LOGIN_PATH);
            }
        }

        getDeviceList();
    }, [page, filters]);

    return deviceList;
};

export function useSelectedFilters(filters) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        const selected = [];

        Object.entries(filters).forEach(entry =>
            entry[1]
                .filter(filter => filter.selected)
                .forEach(filter => {
                    if (filter.value)
                        selected.push({
                            type: entry[0],
                            id: filter.id,
                            label: `${getFilterLabel(entry[0])}: ${
                                filter.value
                            }`,
                        });
                })
        );

        setSelectedFilters(selected);
    }, [filters]);

    return selectedFilters;
}

export const filtersReducer = (state, action) => {
    switch (action.type) {
        case 'regions':
        case 'locations':
        case 'models': {
            const newState = state[action.type].map(iterator =>
                iterator.id === action.value
                    ? { ...iterator, selected: !iterator.selected }
                    : iterator
            );
            return { ...state, [action.type]: newState };
        }
        default:
            throw new Error(`unexpected action type: ${action.type}`);
    }
};
