/// <reference types="react" />
import { RadarColorMapping, RadarCommonProps, RadarDataProps, RadarSvgProps } from './types';
interface RadarSlicesProps<D extends Record<string, unknown>> {
    data: RadarDataProps<D>['data'];
    keys: RadarDataProps<D>['keys'];
    getIndex: (d: D) => string | number;
    formatValue: (value: number, context: string) => string;
    colorByKey: RadarColorMapping;
    radius: number;
    rotation: number;
    angleStep: number;
    tooltip: RadarCommonProps<D>['sliceTooltip'];
    onClick?: RadarSvgProps<D>['onClick'];
}
export declare const RadarSlices: <D extends Record<string, unknown>>({ data, keys, getIndex, formatValue, colorByKey, radius, rotation, angleStep, tooltip, onClick, }: RadarSlicesProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=RadarSlices.d.ts.map