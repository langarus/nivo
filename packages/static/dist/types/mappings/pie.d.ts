import { FunctionComponent } from 'react';
import Joi from 'joi';
import { PieSvgProps } from '@nivo/pie';
import { OmitStrict } from '../types';
export type PieApiProps = OmitStrict<PieSvgProps<any>, 'layers' | 'isInteractive' | 'activeInnerRadiusOffset' | 'activeOuterRadiusOffset' | 'onMouseEnter' | 'onMouseMove' | 'onMouseLeave' | 'onClick' | 'tooltip' | 'animate' | 'motionConfig' | 'transitionMode' | 'renderWrapper'>;
export declare const pieMapping: {
    component: FunctionComponent<Pick<PieSvgProps<any>, "value" | "theme" | "role" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colors" | "legends" | "data" | keyof import("@nivo/core").Dimensions | "id" | "padAngle" | keyof import("../arcs/dist/types/index").ArcLabelsProps<import("@nivo/pie").ComputedDatum<any>> | keyof import("../arcs/dist/types/index").ArcLinkLabelsProps<import("@nivo/pie").ComputedDatum<any>> | "sortByValue" | "innerRadius" | "cornerRadius" | "startAngle" | "endAngle" | "fit" | "enableArcLabels" | "enableArcLinkLabels" | "activeId" | "onActiveIdChange" | "defaultActiveId" | "forwardLegendData" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/pie").ComputedDatum<any>> | "arcLinkLabelComponent">>;
    schema: Joi.ObjectSchema<Pick<PieSvgProps<any>, "value" | "theme" | "role" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colors" | "legends" | "data" | keyof import("@nivo/core").Dimensions | "id" | "padAngle" | keyof import("../arcs/dist/types/index").ArcLabelsProps<import("@nivo/pie").ComputedDatum<any>> | keyof import("../arcs/dist/types/index").ArcLinkLabelsProps<import("@nivo/pie").ComputedDatum<any>> | "sortByValue" | "innerRadius" | "cornerRadius" | "startAngle" | "endAngle" | "fit" | "enableArcLabels" | "enableArcLinkLabels" | "activeId" | "onActiveIdChange" | "defaultActiveId" | "forwardLegendData" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/pie").ComputedDatum<any>> | "arcLinkLabelComponent">>;
    runtimeProps: string[];
    defaults: {
        margin: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
};
//# sourceMappingURL=pie.d.ts.map