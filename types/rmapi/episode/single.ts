import { CharacterOverviewItem } from '../character/overview';

export type EpisodeSingle = {
    name: string;
    episode: string;
    characters: CharacterOverviewItem[];
};

export type EpisodeSingleQueryResult = {
    episode: EpisodeSingle;
};
