export type EpisodeOverviewItem = {
    id: string;
    name: string;
    episode: string;
};

export type EpisodeOverview = EpisodeOverviewItem[];

export type EpisodeOverviewQueryResult = {
    episodes: {
        results: EpisodeOverview;
        info: {
            next?: number;
        };
    };
};
