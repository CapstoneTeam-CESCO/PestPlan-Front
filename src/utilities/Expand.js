export const expandedReducer = (state, action) => {
    switch (action.type) {
        case true: {
            const index = state.indexOf(action.value);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        }
        case false:
            return state.concat(action.value);
        default:
            throw new Error(`unexpected action type: ${action.type}`);
    }
};

export const handleExpanded = (event, expanded, dispatchExpanded) => {
    const clickedId = event.currentTarget.id;

    dispatchExpanded({
        type: expanded.includes(clickedId),
        value: clickedId,
    });
};
