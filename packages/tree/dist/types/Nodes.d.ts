/// <reference types="react" />
import { Margin } from '@nivo/core';
import { TooltipAnchor, TooltipPosition } from '@nivo/tooltip';
import { ComputedNode, CurrentNodeSetter, NodeComponent, NodeMouseEventHandler, NodeTooltip } from './types';
interface NodesProps<Datum> {
    nodes: ComputedNode<Datum>[];
    nodeComponent: NodeComponent<Datum>;
    isInteractive: boolean;
    onMouseEnter?: NodeMouseEventHandler<Datum>;
    onMouseMove?: NodeMouseEventHandler<Datum>;
    onMouseLeave?: NodeMouseEventHandler<Datum>;
    onClick?: NodeMouseEventHandler<Datum>;
    setCurrentNode: CurrentNodeSetter<Datum>;
    tooltip?: NodeTooltip<Datum>;
    tooltipPosition: TooltipPosition;
    tooltipAnchor: TooltipAnchor;
    margin: Margin;
}
export declare const Nodes: <Datum>({ nodes, nodeComponent, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, setCurrentNode, tooltip, tooltipPosition, tooltipAnchor, margin, }: NodesProps<Datum>) => JSX.Element;
export {};
//# sourceMappingURL=Nodes.d.ts.map