import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../atoms/listItem";

function List({ items, itemProps, children, ...props }) {
    return (
        <ul {...props}>
            {items
                ? items.map(item => (
                      <ListItem key={item} {...itemProps}>
                          {item}
                      </ListItem>
                  ))
                : children}
        </ul>
    );
}

List.propTypes = {
    items: PropTypes.array,
    itemProps: PropTypes.object,
    children: PropTypes.arrayOf(PropTypes.node),
};

export default List;
