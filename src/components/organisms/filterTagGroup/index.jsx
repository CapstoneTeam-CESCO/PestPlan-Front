import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import Tag from "../../molecules/tag";

function FilterTagGroup({ className, tagValues, tagProps }) {
    return (
        <div className={className}>
            {tagValues &&
                tagValues.map(tag => {
                    const reTagProps = {
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

                    return <Tag {...reTagProps} />;
                })}
        </div>
    );
}

FilterTagGroup.propTypes = {
    className: PropTypes.string,
    tagValues: PropTypes.array,
    tagProps: PropTypes.object,
};

export default FilterTagGroup;
