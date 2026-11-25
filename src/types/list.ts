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
    criteria?: Criterion[];
    entries: ListEntry[];
};

export type CriterionType = 'rating' | 'text' | 'checkbox';

export type Criterion = {
  id: number;
  name: string;
  type: CriterionType;
};