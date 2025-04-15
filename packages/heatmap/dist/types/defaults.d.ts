import { DefaultHeatMapDatum, HeatMapCommonProps, LayerId } from './types';
export declare const commonDefaultProps: Omit<HeatMapCommonProps<DefaultHeatMapDatum>, 'margin' | 'theme' | 'valueFormat' | 'onClick' | 'renderWrapper' | 'role' | 'ariaLabel' | 'ariaLabelledBy' | 'ariaDescribedBy'> & {
    layers: LayerId[];
};
export declare const svgDefaultProps: {
    axisTop: {};
    axisRight: null;
    axisBottom: null;
    axisLeft: {};
    borderRadius: number;
    cellComponent: "rect";
    legends: Omit<import("@nivo/legends").AnchoredContinuousColorsLegendProps, "scale" | "containerWidth" | "containerHeight">[];
    annotations: import("@nivo/annotations").AnnotationMatcher<import("./types").ComputedCell<DefaultHeatMapDatum>>[];
    borderColor: import("@nivo/colors").InheritedColorConfig<Omit<import("./types").ComputedCell<DefaultHeatMapDatum>, "borderColor">>;
    opacity: number;
    label: import("@nivo/core").PropertyAccessor<Omit<import("./types").ComputedCell<DefaultHeatMapDatum>, "borderColor" | "color" | "opacity" | "label" | "labelTextColor">, string>;
    labelTextColor: import("@nivo/colors").InheritedColorConfig<Omit<import("./types").ComputedCell<DefaultHeatMapDatum>, "labelTextColor">>;
    borderWidth: number;
    animate: boolean;
    motionConfig: string | Partial<import("@react-spring/core").AnimationConfig>;
    forceSquare: boolean;
    sizeVariation: false | import("./types").SizeVariationConfig;
    xInnerPadding: number;
    xOuterPadding: number;
    yInnerPadding: number;
    yOuterPadding: number;
    activeOpacity: number;
    inactiveOpacity: number;
    enableGridX: boolean;
    enableGridY: boolean;
    colors: import("@nivo/colors").ContinuousColorScaleConfig | ((cell: Omit<import("./types").ComputedCell<DefaultHeatMapDatum>, "borderColor" | "color" | "opacity" | "labelTextColor">) => string);
    emptyColor: string;
    enableLabels: boolean;
    isInteractive: boolean;
    hoverTarget: "cell" | "row" | "column" | "rowColumn";
    tooltip: import("./types").TooltipComponent<DefaultHeatMapDatum>;
    layers: LayerId[];
};
export declare const canvasDefaultProps: {
    axisTop: {};
    axisRight: null;
    axisBottom: null;
    axisLeft: {};
    renderCell: "rect";
    pixelRatio: number;
    legends: Omit<import("@nivo/legends").AnchoredContinuousColorsLegendProps, "scale" | "containerWidth" | "containerHeight">[];
    annotations: import("@nivo/annotations").AnnotationMatcher<import("./types").ComputedCell<DefaultHeatMapDatum>>[];
    borderColor: import("@nivo/colors").InheritedColorConfig<Omit<import("./types").ComputedCell<DefaultHeatMapDatum>, "borderColor">>;
    opacity: number;
    label: import("@nivo/core").PropertyAccessor<Omit<import("./types").ComputedCell<DefaultHeatMapDatum>, "borderColor" | "color" | "opacity" | "label" | "labelTextColor">, string>;
    labelTextColor: import("@nivo/colors").InheritedColorConfig<Omit<import("./types").ComputedCell<DefaultHeatMapDatum>, "labelTextColor">>;
    borderWidth: number;
    animate: boolean;
    motionConfig: string | Partial<import("@react-spring/core").AnimationConfig>;
    forceSquare: boolean;
    sizeVariation: false | import("./types").SizeVariationConfig;
    xInnerPadding: number;
    xOuterPadding: number;
    yInnerPadding: number;
    yOuterPadding: number;
    activeOpacity: number;
    inactiveOpacity: number;
    enableGridX: boolean;
    enableGridY: boolean;
    colors: import("@nivo/colors").ContinuousColorScaleConfig | ((cell: Omit<import("./types").ComputedCell<DefaultHeatMapDatum>, "borderColor" | "color" | "opacity" | "labelTextColor">) => string);
    emptyColor: string;
    enableLabels: boolean;
    isInteractive: boolean;
    hoverTarget: "cell" | "row" | "column" | "rowColumn";
    tooltip: import("./types").TooltipComponent<DefaultHeatMapDatum>;
    layers: LayerId[];
};
//# sourceMappingURL=defaults.d.ts.map