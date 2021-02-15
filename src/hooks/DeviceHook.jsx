import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import * as Constants from "../constants/Constants";
import { getItemValues, getFilterLabel } from "../utilities/FilterUtility";

export const useDeviceCount = () => {
    const [deviceCount, setDeviceCount] = useState(0);
    const history = useHistory();

    useEffect(() => {
        async function getDeviceCount() {
            const accessToken = window.sessionStorage.getItem("access_token");

            if (!accessToken) {
                console.log(
                    "There has no access_token. Go back to the login page."
                );

                history.push("/login");
            }

            try {
                const response = await axios.get(
                    `${Constants.HOME_URL}/user?access_token=${accessToken}`
                );

                const { data } = response;

                setDeviceCount(data.device_cnt);
            } catch (exception) {
                console.log(
                    "Token has an exception while get informations. Re-login please."
                );

                history.push("/login");
            }
        }

        getDeviceCount();
    }, []);

    return deviceCount;
};

export const useDeviceList = (page, filters) => {
    const [deviceList, setDeviceList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getDeviceList() {
            const accessToken = window.sessionStorage.getItem("access_token");

            if (!accessToken) {
                console.log(
                    "There has no access_token. Go back to the login page."
                );

                history.push("/login");
            }

            try {
                const { regions, locations, models } = filters;

                const response = await axios.get(
                    `${Constants.HOME_URL}/devices`,
                    {
                        params: {
                            access_token: accessToken,
                            page,
                            row: Constants.ROW_CNT,
                            regions: getItemValues(regions),
                            locations: getItemValues(locations),
                            models: getItemValues(models),
                        },
                    }
                );

                const newDeviceList = response.data.map((data, index) => ({
                    no: index + 1,
                    deviceId: data.trap_id,
                    modelName: data.model_name,
                    region: data.region,
                    location: data.location,
                }));

                setDeviceList(newDeviceList);
            } catch (exception) {
                console.log(
                    "Token has an exception while get informations. Re-login please."
                );

                history.push("/login");
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
        case "regions":
        case "locations":
        case "models": {
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
