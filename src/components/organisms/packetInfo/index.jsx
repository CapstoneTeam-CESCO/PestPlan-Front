import React, { Fragment, useReducer } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Collapse from 'src/components/atoms/collapse';
import ListItem from 'src/components/atoms/listItem';
import APagination from 'src/components/atoms/pagination';
import Title from 'src/components/atoms/title';
import List from 'src/components/molecules/list';
import * as Constants from 'src/constants/Constants';
import { expandedReducer, handleExpanded } from 'src/utilities/Expand';

/* eslint-disable no-underscore-dangle */
function PacketInfo({ packets, paginationProps }) {
    const [expanded, dispatchExpanded] = useReducer(expandedReducer, []);

    return (
        <div className="card">
            <Title className="card__header device-details__header">
                {Constants.PACKET_CAPITAL}
            </Title>
            <List className="device-details--packet">
                {packets.map(packet => (
                    <Fragment key={packet._id}>
                        <ListItem
                            button
                            id={packet._id}
                            className="packet__list"
                            onClick={event =>
                                handleExpanded(
                                    event,
                                    expanded,
                                    dispatchExpanded
                                )
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
            <APagination {...paginationProps} />
        </div>
    );
}

PacketInfo.propTypes = {
    packets: PropTypes.arrayOf(PropTypes.object),
    paginationProps: PropTypes.object,
};

export default PacketInfo;
