import { MouseEvent } from 'react';
import { InheritedColorConfig } from '@nivo/colors';
import { BumpInterpolation, BumpCommonProps, BumpDatum, DefaultBumpDatum, BumpDataProps, BumpComputedSerie, BumpPoint, BumpLabel, BumpLabelData, BumpSerieExtraProps, BumpPointMouseHandler, BumpSerieMouseHandler } from './types';
export declare const useBump: <Datum extends BumpDatum = DefaultBumpDatum, ExtraProps extends BumpSerieExtraProps = Record<string, never>>({ width, height, data, interpolation, xPadding, xOuterPadding, yOuterPadding, lineWidth, activeLineWidth, inactiveLineWidth, colors, opacity, activeOpacity, inactiveOpacity, pointSize, activePointSize, inactivePointSize, pointColor, pointBorderWidth, activePointBorderWidth, inactivePointBorderWidth, pointBorderColor, isInteractive, defaultActiveSerieIds, }: {
    width: number;
    height: number;
    data: import("./types").BumpSerie<Datum, ExtraProps>[];
    interpolation: BumpInterpolation;
    xPadding: number;
    xOuterPadding: number;
    yOuterPadding: number;
    lineWidth: number;
    activeLineWidth: number;
    inactiveLineWidth: number;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<import("./types").BumpSerie<Datum, ExtraProps>>;
    opacity: number;
    activeOpacity: number;
    inactiveOpacity: number;
    pointSize: number;
    activePointSize: number;
    inactivePointSize: number;
    pointColor: InheritedColorConfig<Omit<BumpPoint<Datum, ExtraProps>, "color" | "borderColor">>;
    pointBorderWidth: number;
    activePointBorderWidth: number;
    inactivePointBorderWidth: number;
    pointBorderColor: InheritedColorConfig<Omit<BumpPoint<Datum, ExtraProps>, "borderColor">>;
    isInteractive: boolean;
    defaultActiveSerieIds: string[];
}) => {
    xScale: import("@nivo/scales").ScalePoint<Datum["x"]>;
    yScale: import("@nivo/scales").ScalePoint<number>;
    series: BumpComputedSerie<Datum, ExtraProps>[];
    points: BumpPoint<Datum, ExtraProps>[];
    lineGenerator: import("d3-shape").Line<[number, number | null]>;
    activeSerieIds: string[];
    setActiveSerieIds: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    activePointIds: string[];
    setActivePointIds: import("react").Dispatch<import("react").SetStateAction<string[]>>;
};
export declare const useBumpSerieHandlers: <Datum extends BumpDatum, ExtraProps extends BumpSerieExtraProps>({ serie, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, setActiveSerieIds, lineTooltip: tooltip, }: {
    serie: BumpComputedSerie<Datum, ExtraProps>;
    isInteractive: boolean;
    onMouseEnter?: BumpSerieMouseHandler<Datum, ExtraProps> | undefined;
    onMouseMove?: BumpSerieMouseHandler<Datum, ExtraProps> | undefined;
    onMouseLeave?: BumpSerieMouseHandler<Datum, ExtraProps> | undefined;
    onClick?: BumpSerieMouseHandler<Datum, ExtraProps> | undefined;
    setActiveSerieIds: (serieIds: string[]) => void;
    lineTooltip: import("./types").BumpLineTooltip<Datum, ExtraProps>;
}) => {
    onMouseEnter: ((event: MouseEvent<SVGPathElement>) => void) | undefined;
    onMouseMove: ((event: MouseEvent<SVGPathElement>) => void) | undefined;
    onMouseLeave: ((event: MouseEvent<SVGPathElement>) => void) | undefined;
    onClick: ((event: MouseEvent<SVGPathElement>) => void) | undefined;
};
export declare const useBumpPointHandlers: <Datum extends BumpDatum, ExtraProps extends BumpSerieExtraProps>({ point, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, setActivePointIds, setActiveSerieIds, pointTooltip: tooltip, }: {
    point: BumpPoint<Datum, ExtraProps>;
    isInteractive: boolean;
    onMouseEnter?: BumpPointMouseHandler<Datum, ExtraProps> | undefined;
    onMouseMove?: BumpPointMouseHandler<Datum, ExtraProps> | undefined;
    onMouseLeave?: BumpPointMouseHandler<Datum, ExtraProps> | undefined;
    onClick?: BumpPointMouseHandler<Datum, ExtraProps> | undefined;
    setActivePointIds: (pointIds: string[]) => void;
    setActiveSerieIds: (pointIds: string[]) => void;
    pointTooltip: import("./types").BumpPointTooltip<Datum, ExtraProps>;
}) => {
    onMouseEnter: ((event: MouseEvent<SVGPathElement>) => void) | undefined;
    onMouseMove: ((event: MouseEvent<SVGPathElement>) => void) | undefined;
    onMouseLeave: ((event: MouseEvent<SVGPathElement>) => void) | undefined;
    onClick: ((event: MouseEvent<SVGPathElement>) => void) | undefined;
};
export declare const useBumpSeriesLabels: <Datum extends BumpDatum, ExtraProps extends BumpSerieExtraProps>({ series, position, padding, color, getLabel, }: {
    series: BumpComputedSerie<Datum, ExtraProps>[];
    position: 'start' | 'end';
    padding: number;
    color: InheritedColorConfig<BumpComputedSerie<Datum, ExtraProps>>;
    getLabel: true | ((serie: import("./types").BumpSerie<Datum, ExtraProps>) => string);
}) => BumpLabelData<Datum, ExtraProps>[];
//# sourceMappingURL=hooks.d.ts.map