export type ListEntry = {
    id: number;
    name: string;
    [criterion: string]: string | number;
};

export type ListItem = {
    id: number;
    name: string;
    public: boolean;
    creatorId: number;
    entries: ListEntry[];
};