import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import Collapse from 'src/components/atoms/collapse';
import Image from 'src/components/atoms/image';
import APagination from 'src/components/atoms/pagination';
import Title from 'src/components/atoms/title';
import List from 'src/components/molecules/list';
import * as Constants from 'src/constants/Constants';
import { expandedReducer, handleExpanded } from 'src/utilities/Expand';
import BackImage from 'src/images/back.png';

/* eslint-disable no-underscore-dangle */
function PacketInfo({ packets, paginationProps }) {
    const history = useHistory();
    const [expanded, dispatchExpanded] = useReducer(expandedReducer, []);
    const startNo = (paginationProps.page - 1) * Constants.ROW + 1;

    return (
        <div className="card">
            <div className="details--packet-header">
                <Title className="card__header">
                    {Constants.PACKET_CAPITAL}
                </Title>
                <Image
                    className="packet-header__back"
                    src={BackImage}
                    alt="<-"
                    onClick={() => history.goBack()}
                />
            </div>

            <div className="details--packet">
                <div className="table-row">
                    <List
                        className="packet__list list--header"
                        items={Constants.DEVICE_DETAILS_PACKET_HEADERS}
                        itemProps={{ className: 'row__item' }}
                    />
                </div>

                {packets.map((packet, index) => (
                    <div key={packet._id} className="table-row">
                        <List
                            button
                            id={packet._id}
                            className="packet__list list--body"
                            onClick={event =>
                                handleExpanded(
                                    event,
                                    expanded,
                                    dispatchExpanded
                                )
                            }
                            items={[
                                startNo + index,
                                packet.SPU.MPU.time,
                                packet.SPU.rawData,
                            ]}
                            itemProps={{ className: 'row__item' }}
                        />
                        <Collapse
                            className="packet__details"
                            isOpen={expanded.includes(packet._id)}
                        >
                            <pre>{JSON.stringify(packet, null, 4)}</pre>
                        </Collapse>
                    </div>
                ))}
            </div>
            <APagination {...paginationProps} />
        </div>
    );
}

PacketInfo.propTypes = {
    packets: PropTypes.arrayOf(PropTypes.object),
    paginationProps: PropTypes.object,
};

export default PacketInfo;
