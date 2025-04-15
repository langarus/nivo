interface Id {
    id: string;
}
interface Variable {
    id: string;
    range: [number, number];
    floating?: boolean;
}
interface Group {
    id: string;
}
export declare const generateParallelCoordinatesData: ({ ids, variables, }: {
    ids: Id[];
    variables: Variable[];
}) => {
    id: string;
}[];
export declare const generateGroupedParallelCoordinatesData: ({ ids, groups, variables, }: {
    ids: Id[];
    groups: Group[];
    variables: Variable[];
}) => Record<string, string | number>[];
export {};
//# sourceMappingURL=parallelCoordinates.d.ts.map