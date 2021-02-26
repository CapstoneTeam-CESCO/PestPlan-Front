import * as Constants from '../constants/Constants';

export function createFilterItems(items) {
    return items.map(item => ({
        ...item,
        selected: false,
    }));
}

export function initializeFilters() {
    return {
        ranges: [
            {
                startDate: null,
                endDate: new Date(),
                key: 'selection',
            },
        ],
        dates: [
            {
                startDate: null,
                endDate: new Date(),
                key: 'selection',
            },
        ],
        regions: createFilterItems(Constants.REGIONS),
        locations: createFilterItems(Constants.LOCATIONS),
        models: createFilterItems(Constants.MODELS),
        types: createFilterItems(Constants.TYPES),
    };
}

export function getItemValues(items) {
    return items.filter(item => item.selected).map(item => item.value);
}

export function getFilterLabel(category) {
    switch (category) {
        case 'dates':
            return '날짜';
        case 'regions':
            return '지역';
        case 'locations':
            return '설치 위치';
        case 'models':
            return '트랩 종류';
        case 'types':
            return '메시지 타입';
        default:
            throw new Error(`Unexpected category with ${category}`);
    }
}
