export type LocationOverviewItem = {
    id: number;
    name: string;
    dimension: string;
};

export type LocationOverview = LocationOverviewItem[];

export type LocationOverviewQueryResult = {
    locations: {
        results: LocationOverview;
        info: {
            next?: number;
        };
    };
};
