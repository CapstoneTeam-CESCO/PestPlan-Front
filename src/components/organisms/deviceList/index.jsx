import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Search } from '@material-ui/icons';

import './styles.scss';
import ListItem from 'src/components/atoms/listItem';
import List from 'src/components/molecules/list';
import * as Constants from 'src/constants/Constants';

function DeviceList({ deviceList }) {
    const history = useHistory();

    const handleClickDetail = event => {
        history.push(
            `${Constants.DEVICES_DETAILS_PATH}/${event.currentTarget.id}`
        );
    };

    return deviceList.map(device => {
        const values = Object.values(device);

        values.push(
            <Search
                id={values[1]}
                style={{
                    fontSize: 20,
                    verticalAlign: 'middle',
                    cursor: 'pointer',
                }}
                onClick={handleClickDetail}
            />
        );

        return (
            <ListItem key={values[1]} id={values[1]} className="list--body">
                <List
                    className="list__row"
                    items={values}
                    itemProps={{ className: 'list__row__item' }}
                />
            </ListItem>
        );
    });
}

DeviceList.propTypes = {
    deviceList: PropTypes.array,
};

export default DeviceList;
