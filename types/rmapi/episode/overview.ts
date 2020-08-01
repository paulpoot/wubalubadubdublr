export type EpisodeOverviewItem = {
    id: number;
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
