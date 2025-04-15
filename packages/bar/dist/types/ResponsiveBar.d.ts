/// <reference types="react" />
import { BarDatum, BarSvgProps } from './types';
export type ResponsiveBarSvgProps<RawDatum extends BarDatum> = Omit<BarSvgProps<RawDatum>, 'height' | 'width'>;
export declare const ResponsiveBar: <RawDatum extends BarDatum>(props: ResponsiveBarSvgProps<RawDatum>) => JSX.Element;
//# sourceMappingURL=ResponsiveBar.d.ts.map