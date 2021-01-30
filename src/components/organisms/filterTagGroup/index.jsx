import React from 'react';

import './styles.scss';
import Tag from '../../molecules/tag';

function FilterTagGroup({ className, tagValues, tagProps }) {
    return (
        <div className={className}>
            {tagValues && tagValues.map(tag => {
                tagProps = {
                    ...tagProps,
                    aProps: {
                        ...tagProps.aProps,
                        "data-type": tag.type,
                        id: tag.id,
                    },
                    textProps: {
                        ...tagProps.textProps,
                        children: tag.label,
                    },
                };

                return (
                    <Tag
                        tagProps={tagProps} />
                );
            })}
        </div>
    );
}

export default FilterTagGroup;