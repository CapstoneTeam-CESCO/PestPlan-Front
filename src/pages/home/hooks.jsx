import { useState, useEffect } from "react";
import axios from "axios";

import * as Constants from "../../constants/Constants";

const useDeviceDetail = deviceId => {
    const [detail, setDetail] = useState();

    useEffect(() => {
        async function getDeviceDetail(did) {
            try {
                const response = await axios.get(
                    `${Constants.HOME_URL}/detail?device_id=${did}`
                );

                console.log(response);

                const {
                    data: {
                        id,
                        isError,
                        isReplacement,
                        location,
                        modelName,
                        region,
                    },
                } = response;

                setDetail([
                    { first: "트랩 ID", second: id },
                    { first: "지역", second: region },
                    { first: "설치 위치", second: location },
                    { first: "트랩 종류", second: modelName },
                    {
                        first: "교체 필요 여부",
                        second: isReplacement
                            ? "기기의 교체가 필요합니다."
                            : "-",
                    },
                    {
                        first: "에러 여부",
                        second: isError ? "기기에 에러가 발생했습니다." : "-",
                    },
                ]);
            } catch (exception) {
                console.log(exception);
            }
        }

        getDeviceDetail(deviceId);
    }, [deviceId]);

    return detail;
};

export default useDeviceDetail;
