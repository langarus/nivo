/// <reference types="react" />
import { FunnelDatum, FunnelPartWithHandlers } from './types';
export interface PartTooltipProps<D extends FunnelDatum> {
    part: FunnelPartWithHandlers<D>;
}
export declare const PartTooltip: <D extends FunnelDatum<Record<string, string | number>>>({ part }: PartTooltipProps<D>) => JSX.Element;
//# sourceMappingURL=PartTooltip.d.ts.map