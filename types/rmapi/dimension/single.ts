import { LocationSingle } from '../location/single';

export type DimensionSingle = LocationSingle[];

export type DimensionSingleQueryResult = {
    locations: {
        results: DimensionSingle;
        info: {
            next: number;
        };
    };
};
