export interface FilterOption {
    key: string;
    label: string;
    count: number;
    checked: boolean;
    onToggle: () => void;
}

export interface CategoryFilterOption extends FilterOption {
    subcategories: FilterOption[];
}
