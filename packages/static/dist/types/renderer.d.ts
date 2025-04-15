/// <reference types="react" />
import { ChartProps } from './mappings';
export declare const renderChart: <T extends "bar" | "circle_packing" | "calendar" | "chord" | "heatmap" | "line" | "pie" | "radar" | "sankey" | "sunburst" | "treemap">({ type, props, }: {
    type: T;
    props: import("./mappings").ChartComponent<T> extends infer T_1 ? T_1 extends import("./mappings").ChartComponent<T> ? T_1 extends import("react").FunctionComponent<infer P> ? P : never : never : never;
}, override: Partial<import("./mappings").ChartComponent<T> extends infer T_2 ? T_2 extends import("./mappings").ChartComponent<T> ? T_2 extends import("react").FunctionComponent<infer P> ? P : never : never : never>) => string;
//# sourceMappingURL=renderer.d.ts.map