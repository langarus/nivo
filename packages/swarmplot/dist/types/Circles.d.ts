/// <reference types="react" />
import { SpringValue } from '@react-spring/web';
import { ComputedDatum, CircleComponent, MouseHandlers, SwarmPlotCommonProps } from './types';
/**
 * A negative radius value is invalid for an SVG circle,
 * this custom interpolation makes sure it's either
 * positive or zero.
 */
export declare const interpolateRadius: (radiusValue: SpringValue<number>) => import("@react-spring/core").Interpolation<number, any>;
type CirclesProps<RawDatum> = {
    nodes: ComputedDatum<RawDatum>[];
    borderWidth: SwarmPlotCommonProps<RawDatum>['borderWidth'];
    borderColor: SwarmPlotCommonProps<RawDatum>['borderColor'];
    component: CircleComponent<RawDatum>;
    isInteractive: SwarmPlotCommonProps<RawDatum>['isInteractive'];
    tooltip: SwarmPlotCommonProps<RawDatum>['tooltip'];
} & MouseHandlers<RawDatum>;
export declare const Circles: <RawDatum>({ nodes, borderWidth, borderColor, component, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, }: CirclesProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=Circles.d.ts.map