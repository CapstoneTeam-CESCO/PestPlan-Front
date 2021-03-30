import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import ListItem from 'src/components/atoms/listItem';
import Span from 'src/components/atoms/span';
import Title from 'src/components/atoms/title';
import List from 'src/components/molecules/list';
import * as Constants from 'src/constants/Constants';

function DeviceInfo({ fields, device }) {
    return (
        <div className="card">
            <Title className="card__header device-details__header">
                {Constants.DEVICE_CAPITAL}
            </Title>
            <List className="device-details--device">
                {device.map((info, index) => (
                    <div key={fields[index]} className="table-row">
                        <ListItem className="device__field">
                            {fields[index]}
                        </ListItem>
                        <ListItem className="device__contents">{info}</ListItem>
                    </div>
                ))}
            </List>
            <Span className="card__footer card__footer--empty" />
        </div>
    );
}

DeviceInfo.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string),
    device: PropTypes.arrayOf(PropTypes.string),
};

export default DeviceInfo;
