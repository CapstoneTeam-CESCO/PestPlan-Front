import React, { Fragment, useReducer } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Collapse from 'src/components/atoms/collapse';
import ListItem from 'src/components/atoms/listItem';
import List from 'src/components/molecules/list';
import { expandedReducer, handleExpanded } from 'src/utilities/Expand';

/* eslint-disable no-underscore-dangle */
function PacketInfo({ packets }) {
    const [expanded, dispatchExpanded] = useReducer(expandedReducer, []);

    return (
        <List className="device-details--packet">
            {packets.map(packet => (
                <Fragment key={packet._id}>
                    <ListItem
                        button
                        id={packet._id}
                        className="packet__list"
                        onClick={event =>
                            handleExpanded(event, expanded, dispatchExpanded)
                        }
                    >
                        {packet.SPU.rawData}
                    </ListItem>
                    <Collapse
                        className="packet__details"
                        isOpen={expanded.includes(packet._id)}
                    >
                        <pre>{JSON.stringify(packet, null, 4)}</pre>
                    </Collapse>
                </Fragment>
            ))}
        </List>
    );
}

PacketInfo.propTypes = {
    packets: PropTypes.arrayOf(PropTypes.object),
};

export default PacketInfo;
