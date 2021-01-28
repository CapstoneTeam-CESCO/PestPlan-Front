import React from 'react';

function DisplayDevicePage() {
    // const initialFilters = initializeFilters();
    // const [ regions, setRegions ] = useState(initialFilters.regions);
    // const [ locations, setLocations ] = useState(initialFilters.locations);
    // const [ models, setModels ] = useState(initialFilters.models);
    // const filters = { regions, locations, models };
    // const [ devicePage, setDevicePage ] = useState(1);
    // const deviceCount = useDeviceCount();
    // const deviceTbodies = useDeviceList(devicePage, filters);

    // const handleLocationClassName = (_, index) => {
    //     return "SVGMap-filter-region--location"
    //         .concat(regions[index].selected ? " selected" : "");
    // };

    // const handleLocationClick =(event) => {
    //     const selectedRegion = event.currentTarget.attributes.name.value;

    //     const newRegions = regions.map(region => {
    //         return region.label === selectedRegion
    //             ? { ...region, selected: !region.selected }
    //             : region
    //     });
    //     setRegions(newRegions);
    // };

    // const filterGroupProps = {
    //     filterDeviceId: {
    //         filterHeader: {
    //             a: {
    //                 href: "#collapseFilterDeviceId",
    //             },
    //             text: {
    //                 children: "트랩 ID",
    //             },
    //         },
    //         filterList: {
    //             children: (
    //                 <FilterList
    //                     filters={models}
    //                     setFilters={setModels} />
    //             ),
    //         },
    //     },
    //     filterModel: {
    //         filterHeader: {
    //             a: {
    //                 href: "#collapseFilterModel",
    //             },
    //             text: {
    //                 children: "트랩 종류",
    //             },
    //         },
    //         filterList: {
    //             children: (
    //                 <FilterList
    //                     filters={models}
    //                     setFilters={setModels} />
    //             ),
    //         },
    //     },
    //     filterRegion: {
    //         filterHeader: {
    //             a: {
    //                 href: "#collapseFilterRegion",
    //             },
    //             text: {
    //                 children: "지역",
    //             },
    //         },
    //         filterList: {
    //             children: (
    //                 <SVGMap
    //                     map={southKorea}
    //                     className="filter__list SVGMap-filter-region"
    //                     locationClassName={handleLocationClassName}
    //                     locationRole="checkbox"
    //                     onLocationClick={handleLocationClick} />
    //             ),
    //         },
    //     },
    //     filterLocation: {
    //         filterHeader: {
    //             a: {
    //                 href: "#collapseFilterLocation",
    //             },
    //             text: {
    //                 children: "설치 위치",
    //             },
    //         },
    //         filterList: {
    //             children: (
    //                 <FilterList
    //                     filters={locations}
    //                     setFilters={setLocations} />
    //             ),
    //         },
    //     },
    // };

    return (
        <div className="display-page">
            {/* <FilterGroup
                filterGroupProps={filterGroupProps} /> */}
        </div>
    );
}

export default DisplayDevicePage;