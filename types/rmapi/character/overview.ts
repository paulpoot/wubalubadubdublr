export type CharacterOverviewItem = {
    id: string;
    name: string;
    image: string;
};

export type CharacterOverview = {
    characters: CharacterOverviewItem[];
};
