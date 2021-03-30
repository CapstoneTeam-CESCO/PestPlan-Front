import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Span from 'src/components/atoms/span';
import Image from 'src/components/atoms/image';

function InfoCard({ src, header, count }) {
    return (
        <div className="card info-card">
            <Image className="info-card__image" src={src} alt={header} />
            <Span className="info-card__header">{header}</Span>
            <Span className="info-card__count">{count}</Span>
        </div>
    );
}

InfoCard.propTypes = {
    src: PropTypes.any,
    header: PropTypes.string,
    count: PropTypes.number,
};

export default InfoCard;
