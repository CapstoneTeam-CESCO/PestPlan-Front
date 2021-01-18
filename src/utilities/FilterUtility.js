import * as Constants from './../constants/Constants';

function createRegions(regions) {
    return regions.map(region => ({
        ...region,
        selected: false,
    }));
}

function createFilterItems(items) {
    return items.map(item => ({
        value: item,
        selected: false,
    }));
}

export function initializeFilters() {
    return {
        dates: [{
            startDate: null,
            endDate: null,
            key: 'selection',
        }],
        regions: createRegions(Constants.REGIONS),
        locations: createFilterItems(Constants.LOCATIONS),
        models: createFilterItems(Constants.MODELS),
        types: createFilterItems(Constants.TYPES),
    };
};