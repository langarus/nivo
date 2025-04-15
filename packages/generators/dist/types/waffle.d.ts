export interface WaffleDatumSpec {
    id: string;
    label?: string;
}
export declare const generateWaffleData: <D extends WaffleDatumSpec>({ groups, total, }: {
    groups: D[];
    total: number;
}) => (D & {
    label: string;
    value: number;
})[];
//# sourceMappingURL=waffle.d.ts.map