import { EpisodeOverviewItem } from '../episode/overview';
import { LocationOverviewItem } from '../location/overview';

export type CharacterSingle = {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationOverviewItem;
    location: LocationOverviewItem;
    image: string;
    episode: EpisodeOverviewItem[];
};

export type CharacterSingleQueryResult = {
    character: CharacterSingle;
};
