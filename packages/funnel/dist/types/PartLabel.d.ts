/// <reference types="react" />
import { FunnelDatum, FunnelPart } from './types';
interface PartLabelProps<D extends FunnelDatum> {
    part: FunnelPart<D>;
}
export declare const PartLabel: <D extends FunnelDatum<Record<string, string | number>>>({ part }: PartLabelProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=PartLabel.d.ts.map