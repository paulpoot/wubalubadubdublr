export type EpisodeSingle = {
    name: string;
    episode: string;
    characters: {
        name: string;
        image: string;
    }[];
};

export type EpisodeSingleQueryResult = {
    episode: EpisodeSingle;
};
