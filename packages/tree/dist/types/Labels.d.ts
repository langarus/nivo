/// <reference types="react" />
import { CommonProps, ComputedNode, LabelComponent, LabelsPosition, Layout } from './types';
interface LabelsProps<Datum> {
    nodes: readonly ComputedNode<Datum>[];
    label: Exclude<CommonProps<Datum>['label'], undefined>;
    layout: Layout;
    labelsPosition: LabelsPosition;
    orientLabel: boolean;
    labelOffset: number;
    labelComponent: LabelComponent<Datum>;
}
export declare const Labels: <Datum>({ nodes, label, layout, labelsPosition, orientLabel, labelOffset, labelComponent, }: LabelsProps<Datum>) => JSX.Element;
export {};
//# sourceMappingURL=Labels.d.ts.map