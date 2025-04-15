import { ScaleValue, AnyScale, TicksSpec } from '@nivo/scales';
import { ValueFormatter, Line } from './types';
export declare const computeCartesianTicks: <Value extends ScaleValue>({ axis, scale, ticksPosition, tickValues, tickSize, tickPadding, tickRotation, truncateTickAt, engine, }: {
    axis: 'x' | 'y';
    scale: AnyScale;
    ticksPosition?: "before" | "after" | undefined;
    tickValues?: TicksSpec<Value> | undefined;
    tickSize: number;
    tickPadding: number;
    tickRotation: number;
    truncateTickAt?: number | undefined;
    engine?: "svg" | "canvas" | undefined;
}) => {
    ticks: {
        textX: number;
        textY: number;
        lineX: number;
        lineY: number;
        x: number;
        y: number;
        key: string;
        value: Value;
    }[];
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
};
export declare const getFormatter: <Value extends ScaleValue>(format: string | ValueFormatter<Value> | undefined, scale: AnyScale) => ValueFormatter<Value> | undefined;
export declare const computeGridLines: <Value extends ScaleValue>({ width, height, scale, axis, values: _values, }: {
    width: number;
    height: number;
    scale: AnyScale;
    axis: 'x' | 'y';
    values?: TicksSpec<Value> | undefined;
}) => Line[];
//# sourceMappingURL=compute.d.ts.map