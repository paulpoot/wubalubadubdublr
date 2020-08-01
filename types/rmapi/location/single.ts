export type LocationSingle = {
    name: string;
    dimension: string;
    residents: {
        name: string;
        image: string;
    }[];
};

export type LocationSingleQueryResult = {
    location: LocationSingle;
};
