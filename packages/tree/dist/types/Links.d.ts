/// <reference types="react" />
import { TooltipAnchor } from '@nivo/tooltip';
import { ComputedLink, LinkComponent, LinkMouseEventHandler, LinkTooltip, LinkGenerator } from './types';
interface LinksProps<Datum> {
    links: ComputedLink<Datum>[];
    linkComponent: LinkComponent<Datum>;
    linkGenerator: LinkGenerator;
    isInteractive: boolean;
    onMouseEnter?: LinkMouseEventHandler<Datum>;
    onMouseMove?: LinkMouseEventHandler<Datum>;
    onMouseLeave?: LinkMouseEventHandler<Datum>;
    onClick?: LinkMouseEventHandler<Datum>;
    tooltip?: LinkTooltip<Datum>;
    tooltipAnchor: TooltipAnchor;
}
export declare const Links: <Datum>({ links, linkComponent, linkGenerator, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, tooltipAnchor, }: LinksProps<Datum>) => JSX.Element;
export {};
//# sourceMappingURL=Links.d.ts.map