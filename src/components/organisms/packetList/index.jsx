import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Collapse from 'src/components/atoms/collapse';
import ListItem from 'src/components/atoms/listItem';
import List from 'src/components/molecules/list';
import { expandedReducer, handleExpanded } from 'src/utilities/Expand';

function PacketList({ packetList, notRead, dispatchNotRead }) {
    const [expanded, dispatchExtended] = useReducer(expandedReducer, []);

    const handleClick = event => {
        // update expanded for collapse
        handleExpanded(event, expanded, dispatchExtended);

        // update database for read status
        const clickedId = event.currentTarget.id;
        if (notRead.includes(clickedId)) {
            dispatchNotRead({ type: 'click', value: clickedId });
        }
    };

    return packetList.map(packet => {
        const values = Object.values(packet);
        const rowClassName = 'list__row'.concat(
            notRead.includes(values[6]) ? ' notRead' : ''
        );

        return (
            <ListItem
                button
                key={values[6]}
                id={values[6]}
                className="list--body button--root"
                onClick={handleClick}
            >
                <List
                    className={rowClassName}
                    items={values.slice(0, 6)}
                    itemProps={{ className: 'list__row__item' }}
                />

                <Collapse
                    className="list__detail"
                    isOpen={expanded.includes(values[6])}
                >
                    <pre>{values[7]}</pre>
                </Collapse>
            </ListItem>
        );
    });
}

PacketList.propTypes = {
    packetList: PropTypes.array,
    notRead: PropTypes.array,
    dispatchNotRead: PropTypes.func,
};

export default PacketList;
