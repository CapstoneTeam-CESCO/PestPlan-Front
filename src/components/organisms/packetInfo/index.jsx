import React, { Fragment, useReducer } from 'react';
import PropTypes from 'prop-types';

import Collapse from 'src/components/atoms/collapse';
import ListItem from 'src/components/atoms/listItem';
import List from 'src/components/molecules/list';
import { expandedReducer, handleExpanded } from 'src/utilities/Expand';

/* eslint-disable no-underscore-dangle */
function PacketInfo({ packets, listProps, listItemProps, collapseProps }) {
    const [expanded, dispatchExpanded] = useReducer(expandedReducer, []);

    return (
        <List {...listProps}>
            {packets.map(packet => (
                <Fragment key={packet._id}>
                    <ListItem
                        button
                        id={packet._id}
                        onClick={event =>
                            handleExpanded(event, expanded, dispatchExpanded)
                        }
                        {...listItemProps}
                    >
                        {packet.SPU.rawData}
                    </ListItem>
                    <Collapse
                        isOpen={expanded.includes(packet._id)}
                        {...collapseProps}
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
    listProps: PropTypes.object,
    listItemProps: PropTypes.object,
    collapseProps: PropTypes.object,
};

export default PacketInfo;
