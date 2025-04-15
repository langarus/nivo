/// <reference types="react" />
import { Margin } from '@nivo/core';
import { TooltipAnchor, TooltipPosition } from '@nivo/tooltip';
import { ComputedNode, CurrentNodeSetter, NodeMouseEventHandler, NodeTooltip } from './types';
interface MeshProps<Datum> {
    nodes: ComputedNode<Datum>[];
    width: number;
    height: number;
    margin: Margin;
    onMouseEnter?: NodeMouseEventHandler<Datum>;
    onMouseMove?: NodeMouseEventHandler<Datum>;
    onMouseLeave?: NodeMouseEventHandler<Datum>;
    onClick?: NodeMouseEventHandler<Datum>;
    setCurrentNode: CurrentNodeSetter<Datum>;
    tooltip?: NodeTooltip<Datum>;
    tooltipPosition?: TooltipPosition;
    tooltipAnchor?: TooltipAnchor;
    detectionRadius: number;
    debug: boolean;
}
export declare const Mesh: <Datum>({ nodes, width, height, margin, onMouseEnter, onMouseMove, onMouseLeave, onClick, setCurrentNode, tooltip, tooltipPosition, tooltipAnchor, detectionRadius, debug, }: MeshProps<Datum>) => JSX.Element;
export {};
//# sourceMappingURL=Mesh.d.ts.map