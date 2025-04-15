type BoxPlotConfig = {
    group: string;
    subgroup?: string;
    mu: number;
    sd: number;
    n: number;
};
export declare const generateBoxPlotData: (config: BoxPlotConfig[]) => {
    value: number;
    group: string;
    subgroup?: string | undefined;
    mu: number;
    sd: number;
    n: number;
}[];
export {};
//# sourceMappingURL=boxplot.d.ts.map