import React from 'react';

import './styles.scss';
import SVG from '../../atoms/svg';
import Text from '../../atoms/text';

function Tag({ tagProps: { className, aProps, textProps, svgProps}}) {
    return (
        <div className={className}>
            <a {...aProps}>
                <Text
                    {...textProps} />
                <SVG
                    {...svgProps} />
            </a>
        </div>
    );
}

export default Tag;