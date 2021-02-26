import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import ListItem from 'src/components/atoms/listItem';
import List from 'src/components/molecules/list';

function DeviceInfo({ fields, device }) {
    return (
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
    );
}

DeviceInfo.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string),
    device: PropTypes.arrayOf(PropTypes.string),
};

export default DeviceInfo;
