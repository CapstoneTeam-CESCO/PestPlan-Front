import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import * as Constants from "../constants/Constants";
import { getItemValues, getFilterLabel } from "../utilities/FilterUtility";

export const useNoticeCount = () => {
    const [noticeCount, setNoticeCount] = useState(0);
    const history = useHistory();

    useEffect(() => {
        async function getNoticeCount() {
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

                setNoticeCount(data.notice_cnt);
            } catch (exception) {
                console.log(
                    "Token has an exception while get informations. Re-login please."
                );

                history.push("/login");
            }
        }

        getNoticeCount();
    }, []);

    return noticeCount;
};

export const useNoticeList = (page, filters, dispatchNotRead) => {
    const [noticeList, setNoticeList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getNoticeList() {
            const accessToken = window.sessionStorage.getItem("access_token");

            if (!accessToken) {
                console.log(
                    "There has no access_token. Go back to the login page."
                );

                history.push("/login");
            }

            try {
                const { dates, regions, locations, models, types } = filters;

                const response = await axios.get(
                    `${Constants.HOME_URL}/notices`,
                    {
                        params: {
                            access_token: accessToken,
                            page,
                            row: Constants.ROW_CNT,
                            start: dates[0].startDate,
                            end: dates[0].endDate,
                            regions: getItemValues(regions),
                            locations: getItemValues(locations),
                            models: getItemValues(models),
                            types: getItemValues(types),
                        },
                    }
                );
                console.log(response.data);
                const newNoticeList = response.data.map((data, index) => ({
                    no: index + 1,
                    createdAt: data.created_at,
                    region: data.region,
                    location: data.location,
                    modelName: data.model_name,
                    type: data.type,
                    noticeId: data.notice_id,
                    packet: JSON.stringify(data.packet, null, 4),
                }));

                setNoticeList(newNoticeList);
                dispatchNotRead({
                    type: "initialize",
                    value: response.data
                        .filter(data => data.is_read === false)
                        .map(data => data.notice_id),
                });
            } catch (exception) {
                console.log(
                    "Token has an exception while get informations. Re-login please."
                );

                history.push("/login");
            }
        }

        getNoticeList();
    }, [page, filters]);

    return noticeList;
};

export function useSelectedFilters(filters) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        const selected = [];

        Object.entries(filters)
            .filter(entry => entry[0] !== "dates" && entry[0] !== "ranges")
            .forEach(entry =>
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
        case "ranges":
        case "dates":
            return { ...state, [action.type]: action.value };

        case "regions":
        case "locations":
        case "models":
        case "types": {
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

export const notReadReducer = (state, action) => {
    switch (action.type) {
        case "initialize":
            return action.value;
        case "click_notice": {
            const updateReadStatus = async () => {
                try {
                    await axios.patch(
                        `${Constants.HOME_URL}/notices/${action.value}`,
                        {
                            data: {
                                is_read: true,
                            },
                        }
                    );
                } catch (exception) {
                    throw new Error(exception);
                }
            };
            updateReadStatus();

            const index = state.indexOf(action.value);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        }
        default:
            throw new Error(`unexpected action type: ${action.type}`);
    }
};
