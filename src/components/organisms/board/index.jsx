import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import ListItem from 'src/components/atoms/listItem';
import APagination from 'src/components/atoms/pagination';
import Span from 'src/components/atoms/span';
import Title from 'src/components/atoms/title';
import List from 'src/components/molecules/list';
import DeviceList from '../deviceList';
import FilterTagGroup from '../filterTagGroup';
import PacketList from '../packetList';

function Board({
    className,
    headerProps,
    titleProps,
    notReadChildrens,
    filterTagGroupProps,
    boardProps,
    boardHeaderProps,
    type,
    boardBodyProps,
    apaginationProps,
}) {
    return (
        <div className={className}>
            <div {...headerProps}>
                <Title {...titleProps} />
                {type === 'packet' &&
                    notReadChildrens.map(props => <Span {...props} />)}
            </div>
            <FilterTagGroup {...filterTagGroupProps} />

            <List {...boardProps}>
                <ListItem className="list--header">
                    <List
                        className="list__row"
                        items={boardHeaderProps.headItems}
                        itemProps={{ className: 'list__row__item' }}
                    />
                </ListItem>

                {type === 'packet' && <PacketList {...boardBodyProps} />}
                {type === 'device' && <DeviceList {...boardBodyProps} />}
            </List>

            <APagination {...apaginationProps} />
        </div>
    );
}

Board.propTypes = {
    className: PropTypes.string,
    headerProps: PropTypes.object,
    titleProps: PropTypes.object,
    notReadChildrens: PropTypes.array,
    filterTagGroupProps: PropTypes.object,
    boardProps: PropTypes.object,
    boardHeaderProps: PropTypes.object,
    type: PropTypes.string,
    boardBodyProps: PropTypes.object,
    apaginationProps: PropTypes.object,
};

export default Board;
