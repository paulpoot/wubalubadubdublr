export type LocationSingle = {
    name: string;
    dimension: string;
    residents: {
        id: string;
        name: string;
        image: string;
    }[];
};

export type LocationSingleQueryResult = {
    location: LocationSingle;
};
